/**
 * Módulo de Autenticação Multifator TOTP (RFC 6238)
 * Carregado diretamente via CDN jsDelivr ES Modules (otplib oficial)
 */

import { generateSecret, generateURI, verify } from 'https://cdn.jsdelivr.net/npm/otplib@13.5.0/+esm';

export const ISSUER = 'TFW - Grupo 2';

export { generateSecret };

/**
 * Gera a URI padronizada otpauth:// para escaneamento em aplicativos autenticadores
 * @param {string} label Identificador da conta (ex: e-mail ou nome de usuário)
 * @param {string} secret Segredo codificado em Base32
 * @param {string} [issuer=ISSUER] Nome da organização/emissor
 * @returns {string}
 */
export const keyuri = (label, secret, issuer = ISSUER) =>
  generateURI({ issuer, label, secret });

/**
 * Valida se um código fornecido pelo usuário corresponde ao segredo configurado
 * Utiliza a biblioteca otplib via CDN com tolerância de época configurada para 30 segundos
 * @param {string} token Código de 6 dígitos digitado pelo usuário
 * @param {string} secret Chave secreta em Base32
 * @returns {Promise<boolean>}
 */
export async function check(token, secret) {
  if (!token || !secret) return false;
  const result = await verify({ secret, token: String(token).trim(), epochTolerance: 30 });
  return Boolean(result.valid);
}
