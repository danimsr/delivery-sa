import { useEffect, useState } from "react";
import Sobremesa from "../../Cardapio/Products/Sobremesa";
import PageStructure from "../../components/PageStructure";
import ComidaService from "../../service/ComidaService";

const PageListaSobremesa = () => {

    const [sobremesas, setSobremesas] = useState();

    const buscarSobremesa = async () => {
        const sobremesas = await ComidaService.buscarSobremesa();
        console.log("sobremesas: ", sobremesas);
        setSobremesas(sobremesas.data)
    }
    useEffect(() => {
        buscarSobremesa()
    }, [])

    return (
        <PageStructure titulo="Sobremesas">
                <Sobremesa
                    sobremesas={sobremesas}
                    titulo={''}
                />
        </PageStructure>
    )
}

export default PageListaSobremesa;