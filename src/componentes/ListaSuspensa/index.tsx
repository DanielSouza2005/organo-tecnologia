import { ICategoria } from "../../shared/interfaces/iCategoria";
import "./ListaSuspensa.css";

interface ListaSuspensaProps {
    label: string;
    obrigatorio: boolean;
    valor: string;
    aoAlterar: (value: string) => void;
    itens: ICategoria[];
}

const ListaSuspensa = ({ label, obrigatorio, valor, itens, aoAlterar }: ListaSuspensaProps) => {

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                required={obrigatorio}
                onChange={evento => aoAlterar(String(evento.target.value))}
                value={valor} >

                <option value=""></option>
                {
                    itens.map(item => {
                        return (<option key={item.id}> {item.nome} </option>);
                    })
                }
            </select>
        </div>
    );
}

export default ListaSuspensa;