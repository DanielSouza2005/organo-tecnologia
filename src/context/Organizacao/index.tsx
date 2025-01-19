import { createContext, useState } from "react";
import { IOrganizacaoContextType, OrganizacaoContextProps } from "../../shared/interfaces/iOrganizacao";

export const OrganizacaoContext = createContext<IOrganizacaoContextType | undefined>(undefined);
OrganizacaoContext.displayName = "Organização";

export const OrganizacaoProvider = ({ children }: OrganizacaoContextProps) => {

    const [organizacaoOculta, setOrganizacaoOculta] = useState(false);

    function aoOcultarOrganizacao() {
        return setOrganizacaoOculta(!organizacaoOculta);
    }

    return (
        <OrganizacaoContext.Provider value={{ organizacaoOculta, setOrganizacaoOculta, aoOcultarOrganizacao }}>
            {children}
        </OrganizacaoContext.Provider>
    );
}