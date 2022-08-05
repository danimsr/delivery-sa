import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BebidaService from "../../service/BebidaService";
import ListarComida from "../../Bebida/ListarBebida";
import PageStructure from "../../components/PageStructure";
import Section from "../../components/Section";

const PageListaBebida = () => {

    const [bebidas, setBebidas] = useState();

    const navigate = useNavigate ();
    const atualizarBebida = (bebida) => {
        navigate(`/bebida/cadastro/${bebida.id}`)
    }

    const deletarBebida = async bebidaExcluir => {
        console.log("ComidaId: ", bebidaExcluir)
        await BebidaService.deletarBebida(bebidaExcluir.id);
        buscarBebida();
    }

    const buscarBebida = async () => {
        const bebidas = await BebidaService.buscarBebida();
        console.log("bebidas: ", bebidas);
        setBebidas(bebidas)
    }
    useEffect(() => {
        buscarBebida()
    }, [])

    return (
        <PageStructure titulo="Lista de Bebidas">
            <Section>
                <ListarComida
                    bebidas={bebidas}
                    atualizarBebida={atualizarBebida}
                    deletarBebida={deletarBebida}
                />
            </Section>
        </PageStructure>
    )
}

export default PageListaBebida;