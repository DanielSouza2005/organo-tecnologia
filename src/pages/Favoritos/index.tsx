import Organizacao from "../../componentes/Organizacao";
import Tecnologias from "../../componentes/Tecnologias";
import { useCategorias } from "../../hooks/Categorias";

const Favoritos = () => {

    const { categorias } = useCategorias();

    return (
        <>
            <Organizacao
                titulo="Meus Favoritos"
            >
                {categorias.map((categoria) =>
                    <Tecnologias
                        key={categoria.id}
                        categoria={categoria}
                    />
                )}
            </Organizacao>
        </>
    );
}

export default Favoritos;