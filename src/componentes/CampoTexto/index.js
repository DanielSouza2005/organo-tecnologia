import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(String(evento.target.value));
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} 
                   required={props.obrigatorio} 
                   onChange={aoDigitar} 
                   placeholder={props.placeholder}
            />
        </div>
    );
}

export default CampoTexto;