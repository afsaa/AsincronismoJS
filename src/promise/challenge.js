const fetchData = require('../utils/fetchData');
const baseURL = 'https://rickandmortyapi.com/api/character/';

fetchData(baseURL)
    .then((data1) => {
        console.log(data1.info.count);
        return fetchData(`${baseURL}${data1.results[0].id}`)
    })
    .then((data2) => {
        console.log(data2.name);
        return fetchData(data2.origin.url);
    })
    .then((data3) => {
        console.log(data3.dimension);
    })
    .catch((err) => {
        console.error(err);
    });