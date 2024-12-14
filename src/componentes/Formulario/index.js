import { useState } from 'react';
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = (props) => {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [categoria, setCategoria] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoCadastrarTecnologia({
            nome,
            imagem,
            categoria
        });

        setNome("");
        setImagem("");
        setCategoria("");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>{props.titulo}</h2>

                <CampoTexto
                    obrigatorio={true}
                    label="Nome da tecnologia"
                    placeholder="Digite o Nome..."
                    valor={nome}
                    aoAlterar={valor => { setNome(valor) }}
                />
                <CampoTexto
                    obrigatorio={false}
                    label="Imagem"
                    placeholder="Informe o Caminho da Imagem..."
                    valor={imagem}
                    aoAlterar={valor => { setImagem(valor) }}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria"
                    itens={props.categorias}
                    valor={categoria}
                    aoAlterar={valor => { setCategoria(valor) }}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;