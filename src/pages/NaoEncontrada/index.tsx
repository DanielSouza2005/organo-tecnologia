import Cabecalho from "../../componentes/Cabecalho";
import "./NaoEncontrada.css";

const NaoEncontrada = () => {
    return (
        <>
            <Cabecalho />

            <div className="naoEncontrada">
                <h1>Ops!</h1>
                <p>Página não encontrada :(</p>
            </div>
        </>
    );
}

export default NaoEncontrada;