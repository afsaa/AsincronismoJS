let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(api_url) {
    return new Promise((resolve, reject) => {
        const xhttp = new xmlHttpRequest();
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
                (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error(`Error`, api_url));
            }
        }
        xhttp.send();
    })
}

module.exports = fetchData;