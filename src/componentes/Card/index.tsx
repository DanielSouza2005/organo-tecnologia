import "./card.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface CardProps {
    id: string;
    nome: string;
    imagem: string;
    corFundo: string;
    favorito: boolean;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
}

const Card = ({id, nome, imagem, corFundo, favorito, aoDeletar, aoFavoritar} : CardProps) => {

    function favoritar(){
        aoFavoritar(id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar        
    }

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
                <div className="favoritar">
                    {favorito ? 
                        <MdFavorite {...propsFavorito} color="ff0000" /> : 
                        <MdFavoriteBorder {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;