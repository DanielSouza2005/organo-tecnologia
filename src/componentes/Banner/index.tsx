import "./Banner.css";

interface BannerProps {
    caminhoImagem: string;
    textoAlternativo?: string;
}

const Banner = ({ caminhoImagem, textoAlternativo } : BannerProps) => {
    return (
        <header className="banner">
            <img src={caminhoImagem} alt={textoAlternativo} />
        </header>
    );
}

export default Banner;