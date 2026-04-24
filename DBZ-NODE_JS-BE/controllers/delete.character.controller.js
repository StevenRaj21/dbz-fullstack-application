const { FILE_PATH } = require("../constants/filePath");
const { writeJsonFile } = require("../utilities/jsonHandler.util");
const { getAllCharacters, removeCharacterByName } = require("../services/character.service");

const deleteCharacter = (req, res) => {
  const deleted = removeCharacterByName(req.body.name);

  if (!deleted) {
    return res.status(404).json({
      message: "Character not found",
    });
  }

  const updated = getAllCharacters();

  writeJsonFile(FILE_PATH, {
    items: updated,
    meta: { totalItems: updated.length },
  });

  res.json({
    message: "Deleted successfully",
    data: deleted,
  });
};

module.exports = {
  deleteCharacter,
};