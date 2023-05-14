export const addErrorIntoField = (errors) => errors ? { error: true } : { error: false };
export const phoneRegEx = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const postalCodeRegEx = /^[1-9][0-9]{5}$/;