import hexToRgba from "hex-to-rgba";
import Card from "../Card";
import "./tecnologias.css";

const Tecnologias = (props) => {

    const estiloSection = { backgroundColor: hexToRgba(props.cor, '0.6')};
    const estiloH3 = { borderColor: props.cor };

    return (
        (props.tecnologias.length > 0) ?
            <section className="tecnologia" style={estiloSection}>
                <input type="color"
                       className="input-cor"
                       value={props.cor}
                       onChange={evento => props.mudarCor(evento.target.value, props.id)}
                />
                <h3 style={estiloH3}>{props.nome}</h3>
                <div className="cards">
                    {props.tecnologias.map((tecnologia) => {
                        return <Card key={tecnologia.id}
                                     id={tecnologia.id}
                                     nome={tecnologia.nome}
                                     imagem={tecnologia.imagem}
                                     corFundo={props.cor}
                                     aoDeletar={props.aoDeletar}
                                     favorito={tecnologia.favorito}
                                     aoFavoritar={props.aoFavoritar}
                                />;
                    })}
                </div>
            </section>
            : ""
    );
}

export default Tecnologias;