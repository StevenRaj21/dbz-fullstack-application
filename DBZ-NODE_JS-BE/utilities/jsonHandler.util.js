const fs = require("fs");

const readJsonFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Read Error:", error.message);
    throw error;
  }
};

const writeJsonFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Write Error:", error.message);
    return false;
  }
};

module.exports = {
  readJsonFile,
  writeJsonFile,
};