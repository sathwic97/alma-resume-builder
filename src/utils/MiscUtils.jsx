export const addErrorIntoField = (errors) => errors ? { error: true } : { error: false };
export const phoneRegEx = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
