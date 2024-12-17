import "./card.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Card = ({id, nome, imagem, corFundo, aoDeletar}) => {
    return (
        <div className="card">
            <AiFillCloseCircle 
                className="btn-deletar"
                onClick={() => aoDeletar(id)} 
                size={25}
            />
            <div className="cabecalho" style={{ backgroundColor: corFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
            </div>
        </div>
    );
};

export default Card;