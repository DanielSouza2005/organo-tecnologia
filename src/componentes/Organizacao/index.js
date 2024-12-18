import { BiHide, BiSolidHide } from "react-icons/bi";
import './organizacao.css';

const Organizacao = (props) => {

    const propsOcultar = {
        className: "btn-ocultar",
        size: 32,
        onClick: props.aoOcultar
    }

    return(
        <section className="organizacao"> 
            <div className="organizacao-cabecalho">
                <h2>{props.titulo}</h2>
                {
                    props.oculto ?
                    <BiSolidHide {...propsOcultar} />:
                    <BiHide {...propsOcultar} />                                       
                }                
            </div>           
            
            {
                props.oculto ?
                "" :
                props.children
            }
        </section>
    );
};

export default Organizacao;