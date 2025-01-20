import "./Formulario.css";

import FormularioTecnologia from './FormularioTecnologia';
import FormularioCategoria from './FormularioCategoria';

const Formulario = () => {
    return (
        <section className="formulario">
            <FormularioCategoria 
                titulo="Preencha os dados para criar uma Categoria"
            />

            <FormularioTecnologia 
                titulo="Preencha os dados para criar o card da Tecnologia"
            />
        </section>
    );
}

export default Formulario;