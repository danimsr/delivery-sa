import Home from "../pages/Home";
import PageCadastroComida from "../pages/Service/PageCadastroComida";
import PageListaComida from "../pages/Service/PageListaComida";
import PageListaCardapio from "../pages/Cardapio/PageListaCardapio";
import PageListaPizza from "../pages/Cardapio/PageListaPizza";
import PageListaSobremesa from "../pages/Cardapio/PageListaSobremesa";
import PageCadastroBebida from "../pages/Service/PageCadastroBebida";
import PageListaBebida from "../pages/Service/PageListaBebida";
import PageCardapioBebida from "../pages/Bebidas/PageCardapioBebida";
import PageListaAlcoolico from "../pages/Bebidas/PageListaAlcoolico";

const routes = [
    {
        path: "/",
        element: <Home/> ,
    },
    {
        path: "/comida/cardapio",
        element: <PageListaCardapio/> ,
    },
    {
        path: "/comida/pizza",
        element: <PageListaPizza/> ,
    },
    {
        path: "/comida/sobremesa",
        element: <PageListaSobremesa/> ,
    },
    {
        path: "/comida/lista",
        element: <PageListaComida/>
    },
    {
        path: "/comida/cadastro",
        element: <PageCadastroComida/>
    },
    {
        path:"/comida/cadastro/:id",
        element: <PageCadastroComida/>
    },
    {
        path:"/bebida/cardapio",
        element: <PageCardapioBebida/>
    },
    {
        path:"/bebida/alcoolico",
        element: <PageListaAlcoolico/>
    },
    {
        path:"/bebida/lista",
        element: <PageListaBebida/>
    },
    {
        path: "/bebida/cadastro",
        element: <PageCadastroBebida/>
    },
    {
        path:"/bebida/cadastro/:id",
        element: <PageCadastroBebida/>
    }
]

export default routes;