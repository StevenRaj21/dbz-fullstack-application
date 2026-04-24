const { FILE_PATH } = require("./constants/filePath");
const { readJsonFile } = require("./utilities/jsonHandler.util");

const characterStore = readJsonFile(FILE_PATH);

module.exports = {
  characterStore,
};
