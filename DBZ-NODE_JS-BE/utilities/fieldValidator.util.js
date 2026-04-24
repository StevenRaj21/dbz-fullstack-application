const getMissingFields = (requiredFields, requestBody) => {
  const missing = [];

  requiredFields.forEach((field) => {
    if (!requestBody[field]) {
      missing.push(field);
    }
  });

  return missing;
};

module.exports = {
  getMissingFields,
};