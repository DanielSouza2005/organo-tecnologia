import { BiHide, BiSolidHide } from "react-icons/bi";
import './organizacao.css';
import { ReactNode } from "react";

interface OrganizacaoProps {
    titulo : string;
    oculto: boolean;
    aoOcultar: () => void;
    children: ReactNode;    
}

const Organizacao = ({ titulo, oculto, aoOcultar, children } : OrganizacaoProps) => {

    const propsOcultar = {
        className: "btn-ocultar",
        size: 32,
        onClick: aoOcultar
    }

    return(
        <section className="organizacao"> 
            <div className="organizacao-cabecalho">
                <h2>{titulo}</h2>
                {
                    oculto ?
                    <BiSolidHide {...propsOcultar} />:
                    <BiHide {...propsOcultar} />                                       
                }                
            </div>           
            
            {
                oculto ?
                <></> :
                children
            }
        </section>
    );
};

export default Organizacao;