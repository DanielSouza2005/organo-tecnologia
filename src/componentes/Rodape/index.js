import facebook from '../../imagens/fb.png';
import instagram from '../../imagens/ig.png';
import twitter from '../../imagens/tw.png';
import logo from '../../imagens/logo.png';
import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="rodape">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src={facebook} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src={twitter} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src={instagram} alt="" />
                        </a>
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