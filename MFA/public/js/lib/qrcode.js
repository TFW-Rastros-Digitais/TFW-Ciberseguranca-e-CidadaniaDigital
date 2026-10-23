/**
 * Módulo de Geração de QR Code
 * Carregado diretamente via CDN jsDelivr ES Modules (pacote oficial npm 'qrcode')
 */

import QRCode from 'https://cdn.jsdelivr.net/npm/qrcode@1.5.4/+esm';

/**
 * Gera um Data URL para o texto/URI informado
 * @param {string} text Texto ou URL a ser codificada (ex: URI otpauth://)
 * @returns {Promise<string>} Data URL pronto para atribuir ao src de um <img>
 */
export async function toDataURL(text) {
  return QRCode.toDataURL(text);
}

export default {
  toDataURL
};
