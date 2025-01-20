import { useReducer, createContext } from "react";

import reducerCategoria from "../../reducer/Categorias";
import { CategoriaContextProps, CategoriaContextType } from "../../shared/interfaces/iCategoria";
import { categoriasIniciais } from "../../shared/data/Categoria/categoriasIniciais";

export const CategoriaContext = createContext<CategoriaContextType | undefined>(undefined);
CategoriaContext.displayName = "Categoria";

export const CategoriaProvider = ({ children }: CategoriaContextProps) => {

    const [categorias, dispatchCategorias] = useReducer(reducerCategoria, categoriasIniciais);

    return (
        <CategoriaContext.Provider value={{ categorias, dispatchCategorias }} >
            {children}
        </CategoriaContext.Provider>
    );
}
