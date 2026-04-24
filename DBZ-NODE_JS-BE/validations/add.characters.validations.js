const { getMissingFields } = require("../utilities/fieldValidator.util");

const validateAddCharacter = (req, res, next) => {
  const requiredFields = [
    "id",
    "name",
    "ki",
    "maxKi",
    "race",
    "gender",
    "description",
    "image",
    "affiliation",
  ];

  const missing = getMissingFields(requiredFields, req.body);

  if (missing.length > 0) {
    return res.status(400).json({
      message: "Missing fields",
      missing,
    });
  }

  next();
};

module.exports = {
  validateAddCharacter,
};