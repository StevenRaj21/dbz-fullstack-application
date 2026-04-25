const express = require("express");
const cors = require("cors");

const { characterStore } = require("./characters");

const {
  validateAddCharacter,
} = require("./validations/add.characters.validations");
const {
  validateDeleteCharacter,
} = require("./validations/delete.characters.validations");

const { createCharacter } = require("./controllers/character.controller");
const {
  deleteCharacter,
} = require("./controllers/delete.character.controller");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

const PORT = 3000;
// console.log(characterStore)

app.get("/characters", (req, res) => {
  res.status(200).json(characterStore);
});


app.post("/characters/add", validateAddCharacter, createCharacter);

app.post("/characters/delete", validateDeleteCharacter, deleteCharacter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
