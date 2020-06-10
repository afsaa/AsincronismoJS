let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const baseURL = 'https://rickandmortyapi.com/api/character/';

function fetchData(api_url, callback) {
    let xhttp = new xmlHttpRequest();
    xhttp.open('GET', api_url, true);
    xhttp.onreadystatechange = (event) => {
        /*
        Estados del evento:
        0: Inicializado
        1: Cargando
        2: Cargado
        3: Ya hay información
        4: Solicitud completada de forma exitosa
        */
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error ${api_url}`)
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(baseURL, (error1, data1) => {
    if (error1) return console.error(error1);
    fetchData(baseURL + data1.results[0].id, (error2, data2) => {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        }
        )
    }
    )
}
)