const STORAGE_KEY = 'tfw_mfa_users_store';

/**
 * Cria o estado inicial dos usuários padrão de demonstração
 * @returns {Record<string, { username: string, password: string, totpSecret?: string, pendingSecret?: string }>}
 */
function createDefaultUsers() {
  const defaultUser = {
    username: 'alunorural',
    password: 'senha123',
    totpSecret: undefined,
    pendingSecret: undefined
  };

  return {
    'alunorural': { ...defaultUser },
    'alunorural@ufrrj.br': { ...defaultUser },
    'alunorural@email.com': { ...defaultUser }
  };
}

/**
 * Carrega a base de usuários do sessionStorage ou inicializa os padrões
 */
function loadUsersStore() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('Falha ao ler sessionStorage dos usuários:', err);
  }

  const initial = createDefaultUsers();
  saveUsersStore(initial);
  return initial;
}

/**
 * Salva a base de usuários no sessionStorage
 * @param {Record<string, any>} users
 */
function saveUsersStore(users) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  } catch (err) {
    console.warn('Falha ao persistir no sessionStorage:', err);
  }
}

let memoryUsers = loadUsersStore();

/**
 * Localiza um usuário pelo identificador (username ou e-mail cadastrado)
 * @param {string} identifier
 */
export function findUser(identifier) {
  if (!identifier) return null;
  const key = String(identifier).trim().toLowerCase();
  return memoryUsers[key] || null;
}

/**
 * Valida se as credenciais fornecidas conferem com o usuário cadastrado
 * @param {string} identifier Nome de usuário ou e-mail
 * @param {string} password Senha digitada
 * @returns {boolean}
 */
export function verifyCredentials(identifier, password) {
  const user = findUser(identifier);
  if (!user) return false;
  return user.password === password;
}

/**
 * Define o segredo temporário durante a fase de configuração (wizard)
 * @param {string} identifier
 * @param {string} secret
 */
export function setPendingSecret(identifier, secret) {
  const user = findUser(identifier);
  if (!user) return false;

  // Atualiza em todos os aliases vinculados à conta
  Object.keys(memoryUsers).forEach(key => {
    if (memoryUsers[key].username === user.username) {
      memoryUsers[key].pendingSecret = secret;
    }
  });

  saveUsersStore(memoryUsers);
  return true;
}

/**
 * Confirma o segredo pendente, ativando definitivamente o 2FA para o usuário
 * @param {string} identifier
 */
export function confirmPendingSecret(identifier) {
  const user = findUser(identifier);
  if (!user || !user.pendingSecret) return false;

  const secret = user.pendingSecret;

  Object.keys(memoryUsers).forEach(key => {
    if (memoryUsers[key].username === user.username) {
      memoryUsers[key].totpSecret = secret;
      delete memoryUsers[key].pendingSecret;
    }
  });

  saveUsersStore(memoryUsers);
  return true;
}

/**
 * Desativa a proteção de dois fatores da conta
 * @param {string} identifier
 */
export function disableUserTotp(identifier) {
  const user = findUser(identifier);
  if (!user) return false;

  Object.keys(memoryUsers).forEach(key => {
    if (memoryUsers[key].username === user.username) {
      delete memoryUsers[key].totpSecret;
      delete memoryUsers[key].pendingSecret;
    }
  });

  saveUsersStore(memoryUsers);
  return true;
}

/**
 * Reseta todos os usuários e configurações para o estado original de demonstração
 */
export function resetUsers() {
  memoryUsers = createDefaultUsers();
  saveUsersStore(memoryUsers);
}
