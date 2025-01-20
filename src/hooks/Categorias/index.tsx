import { useContext } from "react";
import { CategoriaContext } from "../../context/Categoria";
import { AlteracaoCorCategoria, ICategoria } from "../../shared/interfaces/iCategoria";
import { CADASTRAR_CATEGORIA, TROCAR_COR_CATEGORIA } from "../../reducer/Categorias";

const addCategoriaAcao = (categoria: ICategoria) => ({
    tipo: CADASTRAR_CATEGORIA,
    categoria: categoria
});

const aoMudarCorCategoriaAcao = ({ cor, id }: AlteracaoCorCategoria) => ({
    tipo: TROCAR_COR_CATEGORIA,
    id: id,
    cor: cor
});

export const useCategorias = () => {
    const { categorias, dispatchCategorias } = useContext(CategoriaContext)!;

    const aoAdicionarNovaCategoria = (categoria: ICategoria) => {
        dispatchCategorias(addCategoriaAcao(categoria));
    };

    const aoMudarCorCategoria = ({ cor, id }: AlteracaoCorCategoria) => {
        dispatchCategorias(aoMudarCorCategoriaAcao({
            cor, id
        }));
    };

    return {
        categorias,
        aoAdicionarNovaCategoria,
        aoMudarCorCategoria
    }
}