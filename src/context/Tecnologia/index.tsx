import { createContext, useReducer } from "react";
import { TecnologiaContextProps, TecnologiaContextType } from "../../shared/interfaces/iTecnologia";
import { useTecnologiasIniciais } from "../../shared/data/Tecnologia/tecnologiasIniciais";
import reducerTecnologia from "../../reducer/Tecnologias";

export const TecnologiaContext = createContext<TecnologiaContextType | undefined>(undefined);
TecnologiaContext.displayName = "Tecnologia";

export const TecnologiaProvider = ({ children } : TecnologiaContextProps) => {

    const tecnologiasIniciais = useTecnologiasIniciais();

    const [tecnologias, dispatchTecnologias] = useReducer(reducerTecnologia, tecnologiasIniciais);

    return(
        <TecnologiaContext.Provider value={{ tecnologias, dispatchTecnologias }}>
            { children }
        </TecnologiaContext.Provider>
    );
}