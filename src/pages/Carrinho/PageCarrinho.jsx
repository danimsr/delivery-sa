import { useEffect, useState } from "react";
import Pizza from "../../Cardapio/Products/Pizza";
import Carrinho from "../../components/Carrinho/Carrinho";
import PageStructure from "../../components/PageStructure";
import ComidaService from "../../service/ComidaService";

const PageCarrinho = () => {
    const [comida, setComida] = useState();
    const [itensCarrinho, setItensCarrinho] = useState([]);

    const onAdd = (comida) => {
        const exist = itensCarrinho.find(x => x.id === comida.id);
        if(exist) {
            setItensCarrinho(
                itensCarrinho.map(x => x.id === comida.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        } else {
            setItensCarrinho([...itensCarrinho, {...comida, qty: 1}])
        }
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
        <PageStructure titulo="Carrinho">
                <Carrinho
                   itensCarrinho={itensCarrinho}
                />
        </PageStructure>
    )
}

export default PageCarrinho;