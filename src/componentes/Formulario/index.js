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
    const [corCategoria, setCorCategoria] = useState("");

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
                    obrigatorio
                    label="Nome da Categoria"
                    placeholder="Digite a Categoria..."
                    valor={nomeCategoria}
                    aoAlterar={valor => { setNomeCategoria(valor) }}
                />
                <Campo
                    obrigatorio={false}
                    type="color"
                    label="Cor"
                    placeholder="Informe a cor da Categoria..."
                    valor={corCategoria}
                    aoAlterar={valor => { setCorCategoria(valor) }}
                />

                <Botao>
                    Criar Categoria
                </Botao>
            </form>

            <form onSubmit={aoSalvarTecnologia}>
                <h2>{props.tituloTecnologia}</h2>

                <Campo
                    obrigatorio
                    label="Nome da Tecnologia"
                    placeholder="Digite o Nome..."
                    valor={nomeTecnologia}
                    aoAlterar={valor => { setNomeTecnologia(valor) }}
                />
                <Campo
                    obrigatorio={false}
                    label="Imagem"
                    placeholder="Informe o Caminho da Imagem..."
                    valor={imagemTecnologia}
                    aoAlterar={valor => { setImagemTecnologia(valor) }}
                />
                <ListaSuspensa
                    obrigatorio
                    label="Categoria"
                    itens={props.categorias}
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