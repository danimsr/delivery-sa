import { useEffect, useState } from "react";
import Pizza from "../../Cardapio/Products/Pizza";
import Sobremesa from "../../Cardapio/Products/Sobremesa";
import PageStructure from "../../components/PageStructure";
import ComidaService from "../../service/ComidaService";

const PageListaCardapio = () => {
    const [pizzas, setPizzas] = useState();
    const [sobremesas, setSobremesas] = useState();

    const buscarPizza = async () => {
        const pizzas = await ComidaService.buscarPizza();
        console.log("pizzas: ", pizzas);
        setPizzas(pizzas.data)
    }
    useEffect(() => {
        buscarPizza()
    }, [])

    const buscarSobremesa = async () => {
        const sobremesas = await ComidaService.buscarSobremesa();
        console.log("sobremesas: ", sobremesas);
        setSobremesas(sobremesas.data)
    }
    useEffect(() => {
        buscarSobremesa()
    }, [])

    return (
        <PageStructure titulo="Cardápio">
            <Pizza
                pizzas={pizzas}
                titulo={"Pizzas"}
            />
            <Sobremesa
                sobremesas={sobremesas}
                titulo={"Sobremesas"}
            />
        </PageStructure>
    )
}

export default PageListaCardapio;