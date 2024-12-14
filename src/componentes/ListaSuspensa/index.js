import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>                        
            <select required={props.obrigatorio} 
                    onChange={evento => props.aoAlterar(String(evento.target.value))}
                    value={props.valor} >

                    <option value=""></option>
                    {props.itens.map(item => {
                        return (<option key={item}> {item} </option>);
                    })}
            </select>
        </div>
    );
}

export default ListaSuspensa;