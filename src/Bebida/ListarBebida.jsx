import React from "react";
import "../assets/css/Listagem.css"

const ListarBebida = props => {
    const { bebidas, atualizarBebida, deletarBebida } = props;
    console.log("Bebidas na lista: ", bebidas);

    if(!bebidas || bebidas.length === 0) {
        return <span>Não existem bebidas a serem listadas</span>
    }

    return (
        <>
        {bebidas && bebidas.length > 0 &&
            <div className="listagem">
                <table className="table-produto">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Alcoólico</th>
                            <th>Teor</th>
                            <th className="acoes" colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bebidas.map(bebida => (
                            <tr key={bebida.id}>
                                <td>{bebida.nome}</td>
                                <td>{bebida.descricao}</td>
                                <td>R${bebida.preco}</td>
                                <td>
                                    <input className="checkbox-lista" type="checkbox" checked={bebida.alcoolico} />
                                </td>
                                <td>{bebida.teorAlcoolico}</td>
                                <td className="acoes">
                                    <button className="botao-form" onClick={() => atualizarBebida(bebida)}>Editar</button>
                                </td>
                                <td className="acoes">
                                    <button className="botao-form" onClick={(e) => deletarBebida(bebida, e)}>Excluir</button>
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

export default ListarBebida;