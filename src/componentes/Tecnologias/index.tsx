import hexToRgba from "hex-to-rgba";
import Card from "../Card";
import "./tecnologias.css";
import { useContext } from "react";
import { TecnologiaContext } from "../../context/Tecnologia";

interface TecnologiasProps {
    id: string;
    nome: string;
    cor: string;    
    mudarCor: (cor: string, id: string) => void;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
};

const Tecnologias = ({ id, nome, cor, mudarCor, aoDeletar, aoFavoritar }: TecnologiasProps) => {

    const { tecnologias } = useContext(TecnologiaContext)!;

    const estiloSection = { backgroundColor: hexToRgba(cor, '0.6') };
    const estiloH3 = { borderColor: cor };

    return (
        (tecnologias.length > 0) ?
            <section className="tecnologia" style={estiloSection}>
                <input
                    type="color"
                    className="input-cor"
                    value={cor}
                    onChange={evento => mudarCor(evento.target.value, id)}
                />
                <h3 style={estiloH3}>{nome}</h3>
                <div className="cards">
                    {tecnologias.map((tecnologia) => {
                        return <Card
                                    key={tecnologia.id}
                                    id={tecnologia.id}
                                    nome={tecnologia.nome}
                                    imagem={tecnologia.imagem}
                                    corFundo={cor}
                                    aoDeletar={aoDeletar}
                                    favorito={tecnologia.favorito ?? false}
                                    aoFavoritar={aoFavoritar}
                                    dataInclusao={tecnologia.dataInclusao}
                                />;
                    })}
                </div>
            </section>
            : 
            <>
            </>
    );
}

export default Tecnologias;