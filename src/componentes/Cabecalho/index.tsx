import { Link } from "react-router-dom";
import "./Cabecalho.css";
import logo from "../../imagens/logo.png"
import CabecalhoLink from "./CabecalhoLink";

const Cabecalho = () => {
    return (
        <header className="cabecalhoNavegador">
            <div>
                <Link to="./">
                    <img
                        src={logo}
                        alt="Logo do Organo"
                    />
                </Link>
            </div>

            <div>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./favoritos">
                    Favoritos
                </CabecalhoLink>
            </div>
        </header>
    );
}

export default Cabecalho;