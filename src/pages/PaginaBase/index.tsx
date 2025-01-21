import { Outlet } from "react-router-dom";
import Banner from "../../componentes/Banner";
import Rodape from "../../componentes/Rodape";
import { CategoriaProvider } from "../../context/Categoria";
import { TecnologiaProvider } from "../../context/Tecnologia";
import { OrganizacaoProvider } from "../../context/Organizacao";

const PaginaBase = () => {
    return (
        <>
            <CategoriaProvider>
                <TecnologiaProvider>
                    <OrganizacaoProvider>
                        <Banner
                            textoAlternativo="Banner principal da Página das Tecnologias usadas no Desenvolvimento"
                        />
                        <Outlet />
                        <Rodape />
                    </OrganizacaoProvider>
                </TecnologiaProvider>
            </CategoriaProvider>
        </>
    );
}

export default PaginaBase;