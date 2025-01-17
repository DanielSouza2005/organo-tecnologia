import { TecnologiaAcao, TecnologiaEstado } from "../../shared/interfaces/iTecnologia";

export const CADASTRAR_TECNOLOGIA = "CADASTRAR_TECNOLOGIA";
export const DELETAR_TECNOLOGIA = "DELETAR_TECNOLOGIA";
export const FAVORITAR_TECNOLOGIA = "FAVORITAR_TECNOLOGIA";

const reducerTecnologia = (estado : TecnologiaEstado, acao : TecnologiaAcao) => {
    switch (acao.tipo) {
        case CADASTRAR_TECNOLOGIA:
            return [...estado, acao.tecnologia];

        case DELETAR_TECNOLOGIA:
            return estado.filter(tecnologia => tecnologia.id !== acao.id);

        case FAVORITAR_TECNOLOGIA:
            return estado.map(tecnologia => {
                if (tecnologia.id === acao.id) {
                    return { ...tecnologia, favorito: !tecnologia.favorito}
                }

                return tecnologia;
            });

        default:
            return estado;
    }
};

export default reducerTecnologia;