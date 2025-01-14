import { ReactElement } from "react";
import "./Botao.css";

interface BotaoProps {
    children: ReactElement
}

const Botao = (props: BotaoProps) => {
    return (
        <button className="botao">
            {props.children}
        </button>
    );
};

export default Botao;