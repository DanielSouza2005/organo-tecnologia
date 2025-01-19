import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./Formulario.css";

import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

import { ICategoria } from '../../shared/interfaces/iCategoria';
import { ITecnologia } from '../../shared/interfaces/iTecnologia';
import { CategoriaContext } from '../../context/Categoria';

interface FormularioProps {
    tituloCategoria: string;
    tituloTecnologia: string;
    aoCadastrarTecnologia: (tecnologia : ITecnologia) => void;
    aoCadastrarCategoria: (categoria : ICategoria) => void;
}

const Formulario = ({ tituloCategoria, tituloTecnologia, aoCadastrarTecnologia, aoCadastrarCategoria }: FormularioProps) => {
    const { categorias } = useContext(CategoriaContext)!;

    const [nomeTecnologia, setNomeTecnologia] = useState("");
    const [imagemTecnologia, setImagemTecnologia] = useState("");
    const [categoriaTecnologia, setCategoriaTecnologia] = useState("");
    const [dataInclusaoTecnologia, setDataInclusaoTecnologia] = useState("");

    const [nomeCategoria, setNomeCategoria] = useState("");
    const [corCategoria, setCorCategoria] = useState("#000000");

    const aoSalvarTecnologia = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoCadastrarTecnologia({
            id: uuidv4(),
            nome: nomeTecnologia,
            imagem: imagemTecnologia,
            categoria: categoriaTecnologia,
            dataInclusao: dataInclusaoTecnologia
        });

        setNomeTecnologia("");
        setImagemTecnologia("");
        setCategoriaTecnologia("");
        setDataInclusaoTecnologia("");
    };

    const aoSalvarCategoria = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoCadastrarCategoria({
            id: uuidv4(),
            nome: nomeCategoria,
            cor: corCategoria
        });

        setNomeCategoria("");
        setCorCategoria("");
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvarCategoria}>
                <h2>{tituloCategoria}</h2>

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

            <form onSubmit={aoSalvarTecnologia}>
                <h2>{tituloTecnologia}</h2>

                <Campo
                    inputObrigatorio
                    inputLabel="Nome da Tecnologia"
                    inputPlaceHolder="Digite o Nome..."
                    inputValor={nomeTecnologia}
                    aoAlterarInput={valor => { setNomeTecnologia(valor) }}
                />
                <Campo
                    inputLabel="Imagem"
                    inputPlaceHolder="Informe o Caminho da Imagem..."
                    inputValor={imagemTecnologia}
                    aoAlterarInput={valor => { setImagemTecnologia(valor) }}
                />
                <Campo 
                   inputObrigatorio
                   inputLabel="Data de Inclusão" 
                   inputType="date"
                   inputPlaceHolder=""
                   inputValor={dataInclusaoTecnologia}
                   aoAlterarInput={valor => { setDataInclusaoTecnologia(valor) }}
                />
                <ListaSuspensa
                    obrigatorio
                    label="Categoria"
                    itens={categorias}
                    valor={categoriaTecnologia}
                    aoAlterar={valor => { setCategoriaTecnologia(valor) }}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;