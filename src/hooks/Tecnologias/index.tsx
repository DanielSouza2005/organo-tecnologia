import { useContext } from "react";
import { TecnologiaContext } from "../../context/Tecnologia";
import { ITecnologia } from "../../shared/interfaces/iTecnologia";
import { CADASTRAR_TECNOLOGIA, DELETAR_TECNOLOGIA, FAVORITAR_TECNOLOGIA } from "../../reducer/Tecnologias";

const aoAdicionarNovaTecnologiaAcao = (tecnologia: ITecnologia) => ({
    tipo: CADASTRAR_TECNOLOGIA,
    tecnologia: tecnologia
});

const aoDeletarTecnologiaAcao = (id: string) => ({
    tipo: DELETAR_TECNOLOGIA,
    id: id
});

const aoFavoritarTecnologiaAcao = (id: string) => ({
    tipo: FAVORITAR_TECNOLOGIA,
    id: id
});

export const useTecnologias = () => {

    const { tecnologias, dispatchTecnologias } = useContext(TecnologiaContext)!;

    const aoAdicionarNovaTecnologia = (tecnologia: ITecnologia) => {
        dispatchTecnologias(aoAdicionarNovaTecnologiaAcao(tecnologia));
    };

    const aoDeletarTecnologia = (id: string) => {
        dispatchTecnologias(aoDeletarTecnologiaAcao(id));
    };

    const aoFavoritarTecnologia = (id: string) => {
        dispatchTecnologias(aoFavoritarTecnologiaAcao(id));
    };

    return {
        tecnologias,
        aoAdicionarNovaTecnologia,
        aoDeletarTecnologia,
        aoFavoritarTecnologia
    }
}