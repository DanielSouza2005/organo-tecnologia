import { v4 as uuidv4 } from 'uuid';
import { ICategoria } from '../../interfaces/iCategoria';

export const categoriasIniciais: ICategoria[] = [
    {
        id: uuidv4(),
        nome: "Front-End",
        cor: '#82CFFA'
    },
    {
        id: uuidv4(),
        nome: "Back-End",
        cor: '#A6D157'
    },
    {
        id: uuidv4(),
        nome: "Mobile",
        cor: '#E06B69'
    },
    {
        id: uuidv4(),
        nome: "Desenvolvimento Web",
        cor: '#D86EBF'
    },
    {
        id: uuidv4(),
        nome: "Desktop",
        cor: '#FEBA05'
    },
    {
        id: uuidv4(),
        nome: "Ciência de Dados",
        cor: '#FF8A29'
    }
];
