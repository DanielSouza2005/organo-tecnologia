import "./card.css";

const Card = ({nome, imagem, corFundo}) => {
    return (
        <div className="card">
            <div className="deletar">
                Deletar
            </div>
            <div className="cabecalho" style={ {backgroundColor: corFundo} }>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
            </div>
        </div>
    );
};

export default Card;