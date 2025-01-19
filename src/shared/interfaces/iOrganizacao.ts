import { ReactNode } from "react";

export interface IOrganizacao {
    oculta: boolean;
}

export interface IOrganizacaoContextType {
    organizacaoOculta: boolean;
    setOrganizacaoOculta: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OrganizacaoContextProps {
    children: ReactNode;
}