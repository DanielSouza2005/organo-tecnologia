import hexToRgba from "hex-to-rgba";
import Card from "../Card";
import "./tecnologias.css";
import { ITecnologia } from "../../shared/interfaces/iTecnologia";
import { ICategoria } from "../../shared/interfaces/iCategoria";
import { useCategorias } from "../../hooks/Categorias";
import { useTecnologias } from "../../hooks/Tecnologias";

interface TecnologiasProps {
    categoria: ICategoria;
};

const Tecnologias = ({ categoria }: TecnologiasProps) => {

    const { aoMudarCorCategoria } = useCategorias();
    
    const { tecnologias } = useTecnologias();    
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
                                    tecnologia={tecnologia}
                                    corFundo={categoria.cor}
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