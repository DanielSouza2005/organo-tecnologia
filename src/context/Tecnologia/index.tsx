import { createContext, useReducer } from "react";
import { ITecnologia, TecnologiaContextProps, TecnologiaContextType } from "../../shared/interfaces/iTecnologia";
import { useTecnologiasIniciais } from "../../shared/data/Tecnologia/tecnologiasIniciais";
import reducerTecnologia, { CADASTRAR_TECNOLOGIA, DELETAR_TECNOLOGIA, FAVORITAR_TECNOLOGIA } from "../../reducer/Tecnologias";

export const TecnologiaContext = createContext<TecnologiaContextType | undefined>(undefined);
TecnologiaContext.displayName = "Tecnologia";

export const TecnologiaProvider = ({ children }: TecnologiaContextProps) => {

    const tecnologiasIniciais = useTecnologiasIniciais();

    const [tecnologias, dispatchTecnologias] = useReducer(reducerTecnologia, tecnologiasIniciais);

    const aoAdicionarNovaTecnologia = (tecnologia: ITecnologia) => {
        dispatchTecnologias({
            tipo: CADASTRAR_TECNOLOGIA,
            tecnologia: tecnologia
        });
    };

    function aoDeletarTecnologia(id: string) {
        dispatchTecnologias({
            tipo: DELETAR_TECNOLOGIA,
            id: id
        });
    };

    function aoFavoritarTecnologia(id: string) {
        dispatchTecnologias({
            tipo: FAVORITAR_TECNOLOGIA,
            id: id
        });
    };

    return (
        <TecnologiaContext.Provider value={{ tecnologias, dispatchTecnologias, aoAdicionarNovaTecnologia, aoDeletarTecnologia, aoFavoritarTecnologia }}>
            {children}
        </TecnologiaContext.Provider>
    );
}