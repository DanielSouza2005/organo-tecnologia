import "./card.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { TecnologiaContext } from "../../context/Tecnologia";
import { useContext } from "react";
import { ITecnologia } from "../../shared/interfaces/iTecnologia";

interface CardProps {
    corFundo: string;
    tecnologia: ITecnologia;
}

const Card = ({ corFundo, tecnologia }: CardProps) => {

    const { aoDeletarTecnologia, aoFavoritarTecnologia } = useContext(TecnologiaContext)!;

    const propsFavorito = {
        size: 25,
        onClick: () => aoFavoritarTecnologia(tecnologia.id)
    }

    return (
        <div className="card">
            <AiFillCloseCircle
                className="btn-deletar"
                onClick={() => aoDeletarTecnologia(tecnologia.id)}
                size={25}
            />
            <div className="cabecalho" style={{ backgroundColor: corFundo }}>
                <img src={tecnologia.imagem} alt={tecnologia.nome} />
            </div>
            <div className="rodape">
                <h4>{tecnologia.nome}</h4>
                <div className="favoritar">
                    {
                        tecnologia.favorito ?
                            <MdFavorite {...propsFavorito} color="ff0000" /> :
                            <MdFavoriteBorder {...propsFavorito} />
                    }
                    <h5>{new Date(tecnologia.dataInclusao + "T00:00:00").toLocaleDateString()}</h5>
                </div>
            </div>
        </div>
    );
};

export default Card;