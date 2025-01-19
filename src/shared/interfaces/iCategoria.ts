import { ReactNode } from "react";
import { CADASTRAR_CATEGORIA, TROCAR_COR_CATEGORIA } from "../../reducer/Categorias";

export interface ICategoria {
    id: string;
    nome: string;
    cor: string;
}

export interface CategoriaContextType {
    categorias: ICategoria[];
    dispatchCategorias: React.Dispatch<any>;
}

export interface CategoriaContextProps {
    children: ReactNode;
}

interface CadastrarCategoriaAcao {
    tipo: typeof CADASTRAR_CATEGORIA;
    categoria: ICategoria;
}

interface TrocarCorCategoriaAcao {
    tipo: typeof TROCAR_COR_CATEGORIA;
    id: string;
    cor: string;
}

export type CategoriaAcao = CadastrarCategoriaAcao | TrocarCorCategoriaAcao;
export type CategoriaEstado = ICategoria[];