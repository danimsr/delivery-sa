import { useEffect, useState } from "react";
import Pizza from "../../Cardapio/Products/Pizza";
import PageStructure from "../../components/PageStructure";
import ComidaService from "../../service/ComidaService";

const PageListaPizza = () => {

    const [pizzas, setPizzas] = useState();

    const buscarPizza = async () => {
        const pizzas = await ComidaService.buscarPizza();
        console.log("comidas: ", pizzas);
        setPizzas(pizzas.data)
    }
    useEffect(() => {
        buscarPizza()
    }, [])

    return (
        <PageStructure titulo="Pizzas">
                <Pizza
                    pizzas={pizzas}
                    titulo={''}
                />
        </PageStructure>
    )
}

export default PageListaPizza;