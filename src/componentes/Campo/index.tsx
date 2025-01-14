import "./Campo.css";

interface CampoProps {
    inputType?: string;
    inputLabel: string;
    inputValor: string;
    inputPlaceHolder: string;
    aoAlterarInput: (value: string) => void;
    inputObrigatorio?: boolean;
}

const Campo = ({ inputType = "text",
                 inputLabel, 
                 inputValor, 
                 inputPlaceHolder, 
                 aoAlterarInput, 
                 inputObrigatorio = false }: CampoProps) => {

    const aoDigitarInput = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterarInput(evento.target.value);        
    }

    return (
        <div className={`campo campo-${inputType}`}>
            <label>{inputLabel}</label>
            <input
                value={inputValor}
                required={inputObrigatorio}
                onChange={aoDigitarInput}
                placeholder={inputPlaceHolder}
                type={inputType}
            />
        </div>
    );
}

export default Campo;