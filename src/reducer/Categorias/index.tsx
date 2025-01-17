import { CategoriaAcao, CategoriaEstado } from "../../shared/interfaces/iCategoria";

export const CADASTRAR_CATEGORIA = "CADASTRAR_CATEGORIA";
export const TROCAR_COR_CATEGORIA = "TROCAR_COR_CATEGORIA";

const reducerCategoria = (estado : CategoriaEstado, acao: CategoriaAcao) => {
    switch (acao.tipo) {
        case CADASTRAR_CATEGORIA:
            return [...estado, acao.categoria];

        case TROCAR_COR_CATEGORIA:
            return estado.map((categoria) =>
                categoria.id === acao.id ? { ...categoria, cor: acao.cor } : categoria
            );

        default:
            return estado;
    }
};

export default reducerCategoria;