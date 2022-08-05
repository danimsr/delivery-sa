import { useEffect, useState } from "react";
import Alcoolico from "../../Bebida/Products/Alcoolico";
import PageStructure from "../../components/PageStructure";
import BebidaService from "../../service/BebidaService";

const PageListaAlcoolico = () => {

    const [bebidas, setBebidas] = useState();

    const buscarBebidaAlcoolica = async () => {
        const bebidas = await BebidaService.buscarBebidaAlcoolica();
        console.log("bebidas: ", bebidas);
        setBebidas(bebidas.data)
    }
    useEffect(() => {
        buscarBebidaAlcoolica()
    }, [])

    return (
        <PageStructure titulo="Alcoólicos">
                <Alcoolico
                    bebidas={bebidas}
                    titulo={''}
                />
        </PageStructure>
    )
}

export default PageListaAlcoolico;