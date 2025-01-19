import { ReactNode } from "react";

export interface IOrganizacao {
    oculta: boolean;
}

export interface IOrganizacaoContextType {
    organizacaoOculta: boolean;
    setOrganizacaoOculta: React.Dispatch<React.SetStateAction<boolean>>;
    aoOcultarOrganizacao: () => void;
}

export interface OrganizacaoContextProps {
    children: ReactNode;
}