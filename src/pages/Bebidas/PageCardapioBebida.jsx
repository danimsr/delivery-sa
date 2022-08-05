import { useEffect, useState } from "react";
import CardapioBebida from "../../Bebida/Products/CardapioBebida";
import PageStructure from "../../components/PageStructure";
import BebidaService from "../../service/BebidaService";

const PageCardapioBebida = () => {

    const [bebidas, setBebidas] = useState();

    const buscarBebida = async () => {
        const bebidas = await BebidaService.buscarBebida();
        console.log("bebidas: ", bebidas);
        setBebidas(bebidas)
    }
    useEffect(() => {
        buscarBebida()
    }, [])

    return (
        <PageStructure titulo="Refrigerantes">
                <CardapioBebida
                    bebidas={bebidas}
                    titulo={''}
                />
        </PageStructure>
    )
}

export default PageCardapioBebida;