import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CadastroComida from "../../Cardapio/service/CadastroComida";
import PageStructure from "../../components/PageStructure";
import Section from "../../components/Section";
import ComidaService from "../../service/ComidaService"

const PageCadastroComida = props => {
    
    const [comida, setComida] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        buscarComidaPorId(id);
    }, [id]);

    const buscarComidaPorId = async (id) => {
        const comida = await ComidaService.buscarComidaPorId(id)
        console.log("Comida: ", comida)
        setComida(comida);
    }
    const salvarComida = async salvarComida => {
        console.log("ComidaId: ", salvarComida)
        if (salvarComida.id) {
            await ComidaService.salvarComida(salvarComida);
        }
        await ComidaService.salvarComida(salvarComida);
    }

    return (
        <PageStructure titulo="Cadastro de produtos">
            <Section >
                <CadastroComida 
                    comida={comida}
                    salvarComida={salvarComida}
                    atualizarStateComida={setComida}
                />
            </Section>
        </PageStructure>
    )
}

export default PageCadastroComida;