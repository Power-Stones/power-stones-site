import axios from 'axios'

let url_api;

const dev_environment = "http://192.168.15.43:3000"; //Ambiente de desenvolvimento.
const production_environment = ""; //Ambiente de produção.
// TROCA DO AMBIENTE DA API
//
// O parâmetro que deverá ser informado será 0 ou 1, sendo que:
// 0 - Ambiente de teste
// 1 - Ambiente de produção
// 
// ==============================
let test_or_prod = 0;
// ==============================
//


switch (test_or_prod) {
    case 0:
        url_api = dev_environment;
        break;
    case 1: 
        url_api = production_environment;
        break;
}

const api = axios.create({
    baseURL: url_api
});

function checkAndSetJwt() {
    let interval = setInterval(() => {
        let jwt = localStorage.getItem("jwt_token");
        if (jwt != null) {
            api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("jwt_token")}`;
            clearInterval(interval);
        }
    }, 100)
}

checkAndSetJwt();

export default api;