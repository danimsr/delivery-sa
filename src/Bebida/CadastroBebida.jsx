import '../assets/css/comida/cadastroComida.css'

const CadastroBebida = props => {
    const { bebida, salvarBebida, atualizarStateBebida } = props;
    console.log("Bebidas na lista: ", bebida);

    const bebidaEdicao = structuredClone(bebida);

    const handleChange = e => {
        bebidaEdicao[e.target.name] = e.target.value
        atualizarStateBebida(bebidaEdicao);
    }

    return (
        <>
            {bebida && <div>
                <div className="campo-formulario">
                    <label className="label-formulario">ID:</label>
                    <input type="text" className="input-formulario" value={bebida.id} disabled />
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Nome:</label>
                    <input type="text" className="input-formulario" name="nome" value={bebidaEdicao.nome} onChange={handleChange} />
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Descrição:</label>
                    <input type="text" className="input-formulario" name="descricao" value={bebidaEdicao.descricao} onChange={handleChange} />
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Preço:</label>
                    <input type="number" className="input-formulario" name="preco" value={bebidaEdicao.preco} onChange={handleChange} />
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Alcoólico:</label>
                    <input type="checkbox" className="input-checkbox" name="alcoolico" checked={bebidaEdicao.alcoolico} onChange={(e) =>{bebidaEdicao.alcoolico = e.target.checked; atualizarStateBebida(bebidaEdicao)}}/>
                </div>
                <div className="campo-formulario">
                    <label className="label-formulario">Teor:</label>
                    <input type="number" className="input-formulario" name="teorAlcoolico" value={bebidaEdicao.teorAlcoolico} onChange={handleChange} />
                </div>
                <div>
                    <button className="botao-cadastro" onClick={() => salvarBebida(bebida)} >Finalizar</button>
                </div>
            </div>}
        </>
    )
}

export default CadastroBebida;