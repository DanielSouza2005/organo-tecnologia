import Card from "../Card";
import "./tecnologias.css";

const Tecnologias = (props) => {

    const estiloSection = { backgroundColor: props.corSecundaria };
    const estiloH3 = { borderColor: props.corPrimaria };

    return (
        (props.tecnologias.length > 0) ? 
        <section className="tecnologia" style={estiloSection}>
            <h3 style={estiloH3}>{props.nome}</h3>
            <div className="cards">
                {props.tecnologias.map(tecnologia => <Card key={tecnologia.nome}
                                                           nome={tecnologia.nome}
                                                           imagem={tecnologia.imagem}
                                                           corFundo={props.corPrimaria} 
                                                      />)}        
            </div>                          
        </section>
        : ""
    );
}

export default Tecnologias;