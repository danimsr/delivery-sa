import axios from "axios";

import * as paths from "./paths";

const BASE_URL = `${paths.BASE_URL}/comida`

class ComidaService {
    buscarComida() {
        return axios.get(`${BASE_URL}/`)
            .then(response => response.data)
    }

    buscarComidaPorId(id) {
        return axios.get(`${BASE_URL}/${id}`)
            .then(response => response.data)
    }

    buscarSobremesa() {
        return axios.get(`${BASE_URL}/sobremesa`)
    }

    buscarPizza() {
        return axios.get(`${BASE_URL}/pizza`)
    }

    salvarComida(comida) {
        axios.post(`${BASE_URL}/`, comida)
    }

    deletarComida(id) {
        return axios.delete(`${BASE_URL}/${id}`)
    }
}

export default new ComidaService();