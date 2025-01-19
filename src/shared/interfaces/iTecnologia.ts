import { ReactNode } from "react";
import { CADASTRAR_TECNOLOGIA, DELETAR_TECNOLOGIA, FAVORITAR_TECNOLOGIA } from "../../reducer/Tecnologias";

export interface ITecnologia {
    id: string;
    nome: string;
    imagem: string;
    favorito?: boolean;
    categoria?: string;
    dataInclusao: string;
}

export interface TecnologiaContextType {
    tecnologias: ITecnologia[];
    dispatchTecnologias: React.Dispatch<any>;
}

export interface TecnologiaContextProps {
    children: ReactNode;
}

interface CadastrarTecnologiaAcao {
    tipo: typeof CADASTRAR_TECNOLOGIA;
    tecnologia: ITecnologia;
}

interface DeletarTecnologiaAcao {
    tipo: typeof DELETAR_TECNOLOGIA;
    id: string;
}

interface FavoritarTecnologiaAcao {
    tipo: typeof FAVORITAR_TECNOLOGIA;
    id: string;
}

export type TecnologiaAcao = CadastrarTecnologiaAcao | DeletarTecnologiaAcao | FavoritarTecnologiaAcao;
export type TecnologiaEstado = ITecnologia[];