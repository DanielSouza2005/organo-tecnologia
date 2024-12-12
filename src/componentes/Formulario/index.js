import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Back-End',
        'Data Science',
        'UX e Design',
        'Mobile',
        'DevOps'
    ];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Form enviado!");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>{props.titulo}</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome..." />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo..." />
                <CampoTexto label="Imagem" placeholder="Informe o Caminho da Imagem..." />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;