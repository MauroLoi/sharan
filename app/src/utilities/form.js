/**
 * Convert entries from data inside HTML form
 * @param {HTMLFormElement} form 
 * @returns {Record<string, any>}
 */
export const getDataFromEntries = (form) => {
    return Object.fromEntries(new FormData(form));
}