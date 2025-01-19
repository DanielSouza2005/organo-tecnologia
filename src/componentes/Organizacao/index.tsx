import './organizacao.css';
import { BiHide, BiSolidHide } from "react-icons/bi";
import { ReactNode, useContext } from "react";
import { Link } from 'react-scroll';

import { OrganizacaoContext } from "../../context/Organizacao";

interface OrganizacaoProps {
    titulo: string;
    children: ReactNode;
}

const Organizacao = ({ titulo, children }: OrganizacaoProps) => {

    const { organizacaoOculta, aoOcultarOrganizacao } = useContext(OrganizacaoContext)!;

    const propsOcultar = {
        className: "btn-ocultar",
        size: 32,
        onClick: aoOcultarOrganizacao
    }

    return (
        <section className="organizacao">
            <div className="organizacao-cabecalho">
                <h2>{titulo}</h2>
                <Link
                    spy={true}
                    smooth={true}
                    duration={750}
                    to="organizacao"
                >
                    {
                        organizacaoOculta ?
                            <BiSolidHide {...propsOcultar} /> :
                            <BiHide {...propsOcultar} />
                    }

                </Link>

            </div>

            {
                organizacaoOculta ?
                    <></> :
                    children
            }
        </section>
    );
};

export default Organizacao;