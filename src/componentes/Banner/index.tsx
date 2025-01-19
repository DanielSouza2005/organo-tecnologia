import "./Banner.css";
import bannerImg from '../../imagens/banner.png';

interface BannerProps {
    textoAlternativo?: string;
}

const Banner = ({ textoAlternativo } : BannerProps) => {
    return (
        <header className="banner">
            <img src={bannerImg} alt={textoAlternativo} />
        </header>
    );
}

export default Banner;