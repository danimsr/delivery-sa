import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CadastroBebida from "../../Bebida/CadastroBebida"
import PageStructure from "../../components/PageStructure";
import Section from "../../components/Section";
import BebidaService from "../../service/BebidaService";

const PageCadastroBebida = props => {
    
    const [bebida, setBebida] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        buscarBebidaPorId(id);
    }, [id]);

    const buscarBebidaPorId = async (id) => {
        const bebida = await BebidaService.buscarBebidaPorId(id)
        console.log("Bebida: ", bebida)
        setBebida(bebida);
    }
    const salvarBebida = async salvarBebida => {
        console.log("BebidaId: ", salvarBebida)
        if (salvarBebida.id) {
            await BebidaService.salvarBebida(salvarBebida);
        }
        await BebidaService.salvarBebida(salvarBebida);
    }

    return (
        <PageStructure titulo="Cadastro de bebidas">
            <Section>
                <CadastroBebida 
                    bebida={bebida}
                    salvarBebida={salvarBebida}
                    atualizarStateBebida={setBebida}
                />
            </Section>
        </PageStructure>
    )
}

export default PageCadastroBebida;