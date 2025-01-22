import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { scroller } from "react-scroll";

import Botao from "../../Botao";
import Campo from "../../Campo";
import ListaSuspensa from "../../ListaSuspensa";
import { obterDataAtual } from "../../../utils";
import { useCategorias } from "../../../hooks/Categorias";
import { useTecnologias } from "../../../hooks/Tecnologias";

interface FormularioTecnologiaProps {
    titulo: string;
}

const FormularioTecnologia = ({ titulo }: FormularioTecnologiaProps) => {

    const { aoAdicionarNovaTecnologia } = useTecnologias();
    const { categorias } = useCategorias();

    const [nomeTecnologia, setNomeTecnologia] = useState("");
    const [imagemTecnologia, setImagemTecnologia] = useState("");
    const [categoriaTecnologia, setCategoriaTecnologia] = useState("");
    const [dataInclusaoTecnologia, setDataInclusaoTecnologia] = useState(obterDataAtual());

    const aoSalvarTecnologia = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        //ATUALIZA O ARRAY
        aoAdicionarNovaTecnologia({
            id: uuidv4(),
            nome: nomeTecnologia,
            imagem: imagemTecnologia,
            categoria: categoriaTecnologia,
            dataInclusao: dataInclusaoTecnologia
        });

        //BUSCA A CATEGORIA PELO NOME
        const categoria = categorias.find(categoria => categoria.nome === categoriaTecnologia);

        //SE ACHOU CATEGORIA, SCROLL ATÉ ELA
        if (categoria) {
            scroller.scrollTo(categoria.id, {
                duration: 750,
                smooth: true,
                spy: true
            });
        }

        //LIMPA OS ESTADOS
        setNomeTecnologia("");
        setImagemTecnologia("");
        setCategoriaTecnologia("");
        setDataInclusaoTecnologia(obterDataAtual);
    };

    return (
        <form onSubmit={aoSalvarTecnologia}>
            <h2>{titulo}</h2>

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
    );
}

export default FormularioTecnologia;