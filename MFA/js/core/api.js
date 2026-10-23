import { generateSecret, keyuri, check } from '../lib/totp.js';
import { toDataURL } from '../lib/qrcode.js';
import {
  findUser,
  verifyCredentials,
  setPendingSecret,
  confirmPendingSecret,
  disableUserTotp,
  resetUsers
} from '../lib/users.js';

/**
 * Utilitário para simular uma breve latência de rede e manter a sensação tátil da interface
 * @param {number} ms
 */
const delay = (ms = 120) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Gera um token assinado (simulado via Base64 seguro)
 * @param {string} username
 * @param {'full' | '2fa'} purpose
 */
function createToken(username, purpose) {
  const payload = {
    sub: username,
    purpose,
    iat: Date.now(),
    exp: Date.now() + (purpose === '2fa' ? 5 * 60 * 1000 : 60 * 60 * 1000)
  };
  return btoa(encodeURIComponent(JSON.stringify(payload)));
}

/**
 * Valida e decodifica o token de sessão
 * @param {string} token
 * @param {'full' | '2fa'} expectedPurpose
 * @returns {string} Nome de usuário (sub)
 */
function parseToken(token, expectedPurpose) {
  if (!token) {
    throw new Error('Token de autenticação não fornecido.');
  }

  try {
    const raw = decodeURIComponent(atob(token));
    const payload = JSON.parse(raw);

    if (payload.exp && Date.now() > payload.exp) {
      throw new Error('Sessão expirada. Faça login novamente.');
    }

    if (expectedPurpose && payload.purpose !== expectedPurpose) {
      throw new Error('Permissão insuficiente para esta operação.');
    }

    return payload.sub;
  } catch (err) {
    if (err.message.includes('Sessão expirada')) throw err;
    throw new Error('Token de autenticação inválido.');
  }
}

/**
 * Autentica o usuário utilizando identificador e senha
 * @param {string} username
 * @param {string} password
 * @returns {Promise<{ twoFactorRequired: boolean, token?: string, tempToken?: string }>}
 */
export async function apiLogin(username, password) {
  await delay(150);

  const isValid = verifyCredentials(username, password);
  if (!isValid) {
    throw new Error('Nome de usuário ou senha inválidos.');
  }

  const user = findUser(username);

  // Se o usuário possui TOTP ativado, emite token temporário para o desafio 2FA
  if (user.totpSecret) {
    const tempToken = createToken(user.username, '2fa');
    return {
      twoFactorRequired: true,
      tempToken
    };
  }

  // Login direto sem 2FA
  const token = createToken(user.username, 'full');
  return {
    twoFactorRequired: false,
    token
  };
}

/**
 * Valida o código TOTP no fluxo de login em 2 etapas
 * @param {string} tempToken Token temporário com escopo 2fa
 * @param {string} code Código de 6 dígitos
 * @returns {Promise<{ token: string }>}
 */
export async function apiVerifyTotpLogin(tempToken, code) {
  await delay(150);

  const username = parseToken(tempToken, '2fa');
  const user = findUser(username);

  if (!user || !user.totpSecret) {
    throw new Error('Token temporário inválido ou expirado.');
  }

  const isCodeValid = await check(code, user.totpSecret);
  if (!isCodeValid) {
    throw new Error('Código de verificação incorreto ou expirado.');
  }

  const token = createToken(user.username, 'full');
  return { token };
}

/**
 * Inicia o setup do 2FA gerando chave secreta, QR Code e URI otpauth
 * @param {string} authToken Token completo de autenticação
 * @returns {Promise<{ secret: string, qrCode: string, otpauthUrl: string }>}
 */
export async function apiSetup2fa(authToken) {
  await delay(150);

  const username = parseToken(authToken, 'full');
  const user = findUser(username);

  if (!user) {
    throw new Error('Usuário não localizado.');
  }

  if (user.totpSecret) {
    throw new Error('O 2FA já está ativo para esta conta.');
  }

  // Gera novo segredo Base32 (160 bits / 20 bytes)
  const secret = generateSecret(20);
  setPendingSecret(user.username, secret);

  const otpauthUrl = keyuri(user.username, secret);
  const qrCode = await toDataURL(otpauthUrl);

  return {
    secret,
    otpauthUrl,
    qrCode
  };
}

/**
 * Confirma o código do autenticador e ativa o 2FA na conta
 * @param {string} authToken Token completo de autenticação
 * @param {string} code Código de 6 dígitos gerado
 * @returns {Promise<{ message: string }>}
 */
export async function apiEnable2fa(authToken, code) {
  await delay(150);

  const username = parseToken(authToken, 'full');
  const user = findUser(username);

  if (!user || !user.pendingSecret) {
    throw new Error('É necessário iniciar o setup antes de confirmar o código.');
  }

  const isCodeValid = await check(code, user.pendingSecret);
  if (!isCodeValid) {
    throw new Error('Código inválido. Verifique o horário do seu dispositivo e tente novamente.');
  }

  confirmPendingSecret(user.username);
  return { message: '2FA ativado com sucesso.' };
}

/**
 * Desativa a proteção de dois fatores mediante confirmação do código atual
 * @param {string} authToken Token completo de autenticação
 * @param {string} code Código de 6 dígitos do autenticador
 * @returns {Promise<{ message: string }>}
 */
export async function apiDisable2fa(authToken, code) {
  await delay(150);

  const username = parseToken(authToken, 'full');
  const user = findUser(username);

  if (!user || !user.totpSecret) {
    throw new Error('O 2FA não está ativo nesta conta.');
  }

  const isCodeValid = await check(code, user.totpSecret);
  if (!isCodeValid) {
    throw new Error('Código incorreto ao desativar o 2FA.');
  }

  disableUserTotp(user.username);
  return { message: '2FA desativado com sucesso.' };
}

/**
 * Reseta o estado do sistema e dos usuários de demonstração
 * @returns {Promise<{ message: string }>}
 */
export async function apiResetSystem() {
  await delay(100);
  resetUsers();
  return { message: 'Estado do sistema resetado com sucesso.' };
}
