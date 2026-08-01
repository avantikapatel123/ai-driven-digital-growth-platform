/**
 * Validates whether a string is a properly formatted URL.
 * Supports http, https, or domain names with basic validation.
 * @param {string} url - The URL string to validate.
 * @returns {boolean}
 */
export function isValidUrl(url) {
  if (!url) return false;
  
  // Basic URL regex pattern
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
  
  return !!urlPattern.test(url);
}
