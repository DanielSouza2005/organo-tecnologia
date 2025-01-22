import facebook from '../../imagens/fb.png';
import instagram from '../../imagens/ig.png';
import twitter from '../../imagens/tw.png';
import logo from '../../imagens/logo.png';
import "./Rodape.css";
import { Link } from 'react-router-dom';

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <Link to="./">
                            <img src={facebook} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="./">
                            <img src={twitter} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="./">
                            <img src={instagram} alt="" />
                        </Link>
                    </li>
                </ul>
            </section>
            <section>
                <img src={logo} alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Daniel Simões.
                </p>
            </section>
        </footer>
    );
}

export default Rodape;