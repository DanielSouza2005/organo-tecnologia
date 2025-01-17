import { CADASTRAR_CATEGORIA, TROCAR_COR_CATEGORIA } from "../../reducer/Categorias";

export interface ICategoria {
    id: string;
    nome: string;
    cor: string;
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