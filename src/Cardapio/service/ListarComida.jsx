import React from "react";
import "../../assets/css/Listagem.css"

const ListarComida = props => {
    const { comida, atualizarComida, deletarComida } = props;
    console.log("Comidas na lista: ", comida);

    if(!comida || comida.length === 0) {
        return <span>Não existem comidas a serem listadas</span>
    }

    return (
        <>
        {comida && comida.length > 0 &&
            <div className="listagem">
                <table className="table-produto">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Tipo</th>
                            <th className="acoes" colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comida.map(comida => (
                            <tr key={comida.id}>
                                <td>{comida.nome}</td>
                                <td>{comida.descricao}</td>
                                <td>{`R$${comida.preco}`}</td>
                                <td>{comida.tipoDeComida}</td>
                                <td className="acoes">
                                    <button className="botao-form" onClick={() => atualizarComida(comida)}>Editar</button>
                                </td>
                                <td className="acoes">
                                    <button className="botao-form" onClick={(e) => deletarComida(comida, e)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        }
        </>
    )
}

export default ListarComida;