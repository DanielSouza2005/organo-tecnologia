import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CategoriaContext } from "../../context/Categoria";
import Campo from "../Campo";
import Botao from "../Botao";

interface FormularioCategoriaProps {
    titulo: string;
}

const FormularioCategoria = ({ titulo }: FormularioCategoriaProps) => {

    const { aoAdicionarNovaCategoria } = useContext(CategoriaContext)!;

    const [nomeCategoria, setNomeCategoria] = useState("");
    const [corCategoria, setCorCategoria] = useState("#000000");

    const aoSalvarCategoria = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoAdicionarNovaCategoria({
            id: uuidv4(),
            nome: nomeCategoria,
            cor: corCategoria
        });

        setNomeCategoria("");
        setCorCategoria("");
    };

    return (
        <form onSubmit={aoSalvarCategoria}>
            <h2>{titulo}</h2>

            <Campo
                inputObrigatorio
                inputLabel="Nome da Categoria"
                inputPlaceHolder="Digite a Categoria..."
                inputValor={nomeCategoria}
                aoAlterarInput={valor => { setNomeCategoria(valor) }}
            />
            <Campo
                inputType="color"
                inputLabel="Cor"
                inputPlaceHolder="Informe a cor da Categoria..."
                inputValor={corCategoria}
                aoAlterarInput={valor => { setCorCategoria(valor) }}
            />

            <Botao>
                Criar Categoria
            </Botao>
        </form>
    );
}

export default FormularioCategoria;