import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = (props) => {
    const [nomeTecnologia, setNomeTecnologia] = useState("");
    const [imagemTecnologia, setImagemTecnologia] = useState("");
    const [categoriaTecnologia, setCategoriaTecnologia] = useState("");

    const [nomeCategoria, setNomeCategoria] = useState("");
    const [corCategoria, setCorCategoria] = useState("#000000");

    const aoSalvarTecnologia = (evento) => {
        evento.preventDefault();
        props.aoCadastrarTecnologia({
            id: uuidv4(),
            nome: nomeTecnologia,
            imagem: imagemTecnologia,
            categoria: categoriaTecnologia
        });

        setNomeTecnologia("");
        setImagemTecnologia("");
        setCategoriaTecnologia("");
    };

    const aoSalvarCategoria = (evento) => {
        evento.preventDefault();
        props.aoCadastrarCategoria({
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
                <h2>{props.tituloCategoria}</h2>

                <Campo
                    inputObrigatorio
                    inputLabel="Nome da Categoria"
                    inputPlaceHolder="Digite a Categoria..."
                    inputValor={nomeCategoria}
                    aoAlterarInput={valor => { setNomeCategoria(valor) }}
                />
                <Campo
                    inputObrigatorio={false}
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
                <h2>{props.tituloTecnologia}</h2>

                <Campo
                    inputObrigatorio
                    inputLabel="Nome da Tecnologia"
                    inputPlaceHolder="Digite o Nome..."
                    inputValor={nomeTecnologia}
                    aoAlterarInput={valor => { setNomeTecnologia(valor) }}
                />
                <Campo
                    inputObrigatorio={false}
                    inputLabel="Imagem"
                    inputPlaceHolder="Informe o Caminho da Imagem..."
                    inputValor={imagemTecnologia}
                    aoAlterarInput={valor => { setImagemTecnologia(valor) }}
                />
                <ListaSuspensa
                    obrigatorio
                    label="Categoria"
                    itens={props.categorias}
                    value={categoriaTecnologia}
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