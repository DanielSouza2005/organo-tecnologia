import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Tecnologias from './componentes/Tecnologias';
import Rodape from './componentes/Rodape';

function App() {

  const categorias = [
    {
      nome: "Front-End",
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: "Back-End",
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: "Mobile",
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: "Desenvolvimento Web",
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome: "Desktop",
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: "Ciência de Dados",
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ];

  const [tecnologias, setTecnologias] = useState([]);

  const aoAdicionarNovaTecnologia = (tecnologia) => {
    setTecnologias([...tecnologias, tecnologia]);
  }

  return (
    <div className="App">
      <Banner />

      <Formulario
        titulo="Preencha os dados para criar o card da Tecnologia"
        aoCadastrarTecnologia={tecnologia => aoAdicionarNovaTecnologia(tecnologia)}
        categorias={categorias.map(categoria => categoria.nome)}
      />

      {categorias.map(categoria => <Tecnologias 
                                      key={categoria.nome}
                                      nome={categoria.nome}
                                      corPrimaria={categoria.corPrimaria}
                                      corSecundaria={categoria.corSecundaria}
                                      tecnologias={tecnologias.filter(tecnologia => tecnologia.categoria === categoria.nome )}
                                    />)}

      <Rodape />                                   

    </div>
  );
}

export default App;
