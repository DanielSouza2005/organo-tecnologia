import './Campo.css';

const Campo = ({type = "text", label, valor, placeholder, aoAlterar, obrigatorio = false}) => {

    const aoDigitar = (evento) => {
        aoAlterar(String(evento.target.value));
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input value={valor} 
                   required={obrigatorio} 
                   onChange={aoDigitar} 
                   placeholder={placeholder}
                   type={type}
            />
        </div>
    );
}

export default Campo;