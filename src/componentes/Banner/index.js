import banner from '../../imagens/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <header className='banner'>
            <img src={banner} alt="Banner principal da Página das Tecnologias usadas no Desenvolvimento" />
        </header>
    );
}

export default Banner;