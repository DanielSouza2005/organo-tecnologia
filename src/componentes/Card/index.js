import "./card.css";

const Card = ({nome, imagem, corFundo}) => {
    return (
        <div className="card">
            <div className="cabecalho" style={ {backgroundColor: corFundo} }>
                <img src={imagem} alt="Daniel Simões"/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
            </div>
        </div>
    );
};

export default Card;