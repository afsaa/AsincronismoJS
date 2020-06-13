const fetchData = require('../utils/fetchData');
const baseURL = 'https://rickandmortyapi.com/api/character/';

const getData = async () => {
    try {
        const characters = await fetchData(baseURL);
        console.log(characters.info.count);
        const firstCharacter = await fetchData(`${baseURL}${characters.results[0].id}`);
        console.log(firstCharacter.name);
        const origin = await fetchData(firstCharacter.origin.url);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

getData();