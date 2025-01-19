import { useReducer, createContext } from "react";

import reducerCategoria, { CADASTRAR_CATEGORIA, TROCAR_COR_CATEGORIA } from "../../reducer/Categorias";
import { AlteracaoCorCategoria, CategoriaContextProps, CategoriaContextType, ICategoria } from "../../shared/interfaces/iCategoria";
import { categoriasIniciais } from "../../shared/data/Categoria/categoriasIniciais";

export const CategoriaContext = createContext<CategoriaContextType | undefined>(undefined);
CategoriaContext.displayName = "Categoria";

export const CategoriaProvider = ({ children }: CategoriaContextProps) => {

    const [categorias, dispatchCategorias] = useReducer(reducerCategoria, categoriasIniciais);

    const aoAdicionarNovaCategoria = (categoria: ICategoria) => {
        dispatchCategorias({
            tipo: CADASTRAR_CATEGORIA,
            categoria: categoria
        });
    };

    function aoMudarCorCategoria({ cor, id } : AlteracaoCorCategoria) {
        dispatchCategorias({
            tipo: TROCAR_COR_CATEGORIA,
            id: id,
            cor: cor
        });
    };

    return (
        <CategoriaContext.Provider value={{ categorias, dispatchCategorias, aoAdicionarNovaCategoria, aoMudarCorCategoria }} >
            {children}
        </CategoriaContext.Provider>
    );
}
