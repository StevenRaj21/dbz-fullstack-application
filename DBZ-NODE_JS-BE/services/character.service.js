const { characterStore } = require("../characters");

const getAllCharacters = () => {
  return characterStore.items;
};

const addCharacter = (newCharacter) => {
  characterStore.items.push(newCharacter);
  return newCharacter;
};

const removeCharacterByName = (name) => {
  const index = characterStore.items.findIndex(
    (char) => char.name === name
  );

  if (index === -1) return null;

  return characterStore.items.splice(index, 1)[0];
};

module.exports = {
  getAllCharacters,
  addCharacter,
  removeCharacterByName,
};