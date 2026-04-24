import axios from "axios";

export const getAllCharacters = async () => {
  try {
    const getCharResponce = await axios.get(`http://localhost:3000/characters`);
    const getCharresData = getCharResponce.data;
    return getCharresData.items;
  } catch (error) {
    console.log(`error occured at getAllCharacters : ${JSON.stringify(error)}`);
    throw error;
  }
};

export default getAllCharacters;
