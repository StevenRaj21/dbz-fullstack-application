const { FILE_PATH } = require("../constants/filePath");
const { writeJsonFile } = require("../utilities/jsonHandler.util");
const { getAllCharacters, addCharacter } = require("../services/character.service");

const createCharacter = (req, res) => {
  const newChar = addCharacter(req.body);

  const updated = getAllCharacters();

  writeJsonFile(FILE_PATH, {
    items: updated,
    meta: { totalItems: updated.length },
  });

  res.status(201).json({
    message: "Character added",
    data: newChar,
  });
};

module.exports = {
  createCharacter,
};