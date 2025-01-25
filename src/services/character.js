const URL = 'https://dragonball-api.com/api';

const characterService = {
  getCharacters: async () => {
    const response = await fetch(`${URL}/characters`);
    const data = await response.json();
    return data.items;
  },

  getCharacterById: async (id) => {
    const response = await fetch(`${URL}/characters/${id}`);
    const data = await response.json();
    return data;
  },

  postCharacter: () => {},
  deleteCharacter: () => {},
};

export default characterService;
