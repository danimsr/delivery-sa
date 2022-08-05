import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListarComida from "../../Cardapio/service/ListarComida";
import PageStructure from "../../components/PageStructure";
import Section from "../../components/Section";
import ComidaService from "../../service/ComidaService";

const PageListaComida = () => {

    const [comida, setComida] = useState();


    const navigate = useNavigate();
    const atualizarComida = (comida) => {
        navigate(`/comida/cadastro/${comida.id}`)
    }

    const deletarComida = async comidaExcluir => {
        console.log("ComidaId: ", comidaExcluir)
        await ComidaService.deletarComida(comidaExcluir.id);
        buscarComida();
    }

    const buscarComida = async () => {
        const comida = await ComidaService.buscarComida();
        console.log("comida: ", comida);
        setComida(comida)
    }
    useEffect(() => {
        buscarComida()
    }, [])

    return (
        <PageStructure titulo="Listagem de produtos">
            <Section>
                <ListarComida
                    comida={comida}
                    atualizarComida={atualizarComida}
                    deletarComida={deletarComida}
                />
            </Section>
        </PageStructure>
    )
}

export default PageListaComida;