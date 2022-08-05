import '../../assets/css/comida/cadastroComida.css'

const CadastroComida = props => {
    const { comida, salvarComida, atualizarStateComida } = props;
    console.log("Comidas na lista: ", comida);

    const comidaEdicao = structuredClone(comida);

    const handleChange = e => {
        comidaEdicao[e.target.name] = e.target.value
        atualizarStateComida(comidaEdicao);
    }

    return (
        <>
            {comida && <div>
                <div className="campo-formulario">
                    <label className="label-formulario">ID:</label>
                    <input type="text" className="input-formulario" value={comida.id} disabled />
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Nome:</label>
                    <input type="text" className="input-formulario" name="nome" value={comidaEdicao.nome} onChange={handleChange} />
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Descrição:</label>
                    <input type="text" className="input-formulario" name="descricao" value={comidaEdicao.descricao} onChange={handleChange} />
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Preço:</label>
                    <input type="number" className="input-formulario" name="preco" value={comidaEdicao.preco} onChange={handleChange} />
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Tipo de comida:</label>
                    <input type="text" className="input-formulario" name="tipoDeComida" value={comidaEdicao.tipoDeComida} onChange={handleChange} />
                </div>
                <div>
                    <button onClick={() => salvarComida(comida)} className="botao-cadastro">Finalizar</button>
                </div>
            </div>}
        </>
    )
}

export default CadastroComida;