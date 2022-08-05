import axios from "axios";

import * as paths from "./paths";

const BASE_URL = `${paths.BASE_URL}/bebida`

class BebidaService {
    buscarBebida() {
        return axios.get(`${BASE_URL}/`)
            .then(response => response.data)
    }

    buscarBebidaPorId(id) {
        return axios.get(`${BASE_URL}/${id}`)
            .then(response => response.data)
    }

    buscarBebidaAlcoolica() {
        return axios.get(`${BASE_URL}/alcoolico`)
    }

    salvarBebida(bebida) {
        axios.post(`${BASE_URL}/`, bebida)
    }

    deletarBebida(id) {
        return axios.delete(`${BASE_URL}/${id}`)
    }
}

export default new BebidaService();