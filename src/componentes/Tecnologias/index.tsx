import hexToRgba from "hex-to-rgba";
import Card from "../Card";
import "./tecnologias.css";
import { useContext } from "react";
import { TecnologiaContext } from "../../context/Tecnologia";
import { ITecnologia } from "../../shared/interfaces/iTecnologia";
import { ICategoria } from "../../shared/interfaces/iCategoria";
import { CategoriaContext } from "../../context/Categoria";

interface TecnologiasProps {
    categoria: ICategoria;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
};

const Tecnologias = ({ categoria, aoDeletar, aoFavoritar }: TecnologiasProps) => {

    const { aoMudarCorCategoria } = useContext(CategoriaContext)!;
    
    const { tecnologias } = useContext(TecnologiaContext)!;    
    const tecnologiasFiltradas = tecnologias.filter((tecnologia : ITecnologia) => tecnologia.categoria === categoria.nome);

    const estiloSection = { backgroundColor: hexToRgba(categoria.cor, '0.6') };
    const estiloH3 = { borderColor: categoria.cor };

    return (
        (tecnologiasFiltradas.length > 0) ?
            <section className="tecnologia" style={estiloSection}>
                <input
                    type="color"
                    className="input-cor"
                    value={categoria.cor}
                    onChange={evento => aoMudarCorCategoria({cor: evento.target.value, id: categoria.id })}
                />
                <h3 style={estiloH3}>{categoria.nome}</h3>
                <div className="cards">
                    {tecnologiasFiltradas.map((tecnologia) => {
                        return <Card
                                    key={tecnologia.id}
                                    id={tecnologia.id}
                                    nome={tecnologia.nome}
                                    imagem={tecnologia.imagem}
                                    corFundo={categoria.cor}
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