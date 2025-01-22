import "./Favoritos.css";
import Organizacao from "../../componentes/Organizacao";
import Tecnologias from "../../componentes/Tecnologias";
import { useCategorias } from "../../hooks/Categorias";
import { useTecnologias } from "../../hooks/Tecnologias";
import { ITecnologia } from "../../shared/interfaces/iTecnologia";

const Favoritos = () => {

    const { categorias } = useCategorias();
    const { tecnologias } = useTecnologias();

    const tecnologiasFiltradas = tecnologias.filter((tecnologia: ITecnologia) => (tecnologia.favorito));

    return (
        <Organizacao
            titulo="Meus Favoritos"
        >
            {
                tecnologiasFiltradas.length > 0 ?
                    categorias.map((categoria) =>
                        <Tecnologias
                            key={categoria.id}
                            categoria={categoria}
                            filtro={(tecnologia: ITecnologia) => (tecnologia.categoria === categoria.nome) && (tecnologia.favorito)!}
                        />
                    )
                    :
                    <div className="semFavorito">
                        <p> Nenhum Favorito cadastrado! </p>
                    </div>
            }
        </Organizacao>
    );
}

export default Favoritos;