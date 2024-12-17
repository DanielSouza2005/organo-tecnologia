import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Tecnologias from './componentes/Tecnologias';
import Rodape from './componentes/Rodape';

function App() {

  const [categorias, setCategorias] = useState([
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
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'HTML',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      nome: 'CSS',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      nome: 'JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      nome: 'React',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      nome: 'JavaScript',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      nome: 'C#',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Java',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Python',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Kotlin',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Swift',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Flutter',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      nome: 'React Native',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      nome: 'React',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Node JS',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      nome: 'TypeScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Tailwind',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      nome: 'C#',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Java',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Delphi',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Python',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Julia',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Python',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[5].nome
    },
    {
      id: uuidv4(),
      nome: 'R',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Scala',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[5].nome
    },
  ];

  const [tecnologias, setTecnologias] = useState(inicial);

  const aoAdicionarNovaTecnologia = (tecnologia) => {
    setTecnologias([...tecnologias, tecnologia]);
  };

  const aoAdicionarNovaCategoria = (categoria) => {    
    setCategorias([...categorias, categoria]);
  }

  function aoDeletarTecnologia(id) {
    setTecnologias(tecnologias.filter(tecnologia => tecnologia.id !== id));
  };

  function aoMudarCorDoTime(cor, id) {
    setCategorias(categorias.map(categoria => {

      if (categoria.id === id) {
        categoria.cor = cor;
      }

      return categoria;
    }));
  }

  return (
    <div className="App">
      <Banner />

      <Formulario
        tituloTecnologia="Preencha os dados para criar o card da Tecnologia"
        tituloCategoria="Preencha os dados para uma Categoria"
        aoCadastrarTecnologia={tecnologia => aoAdicionarNovaTecnologia(tecnologia)}
        aoCadastrarCategoria={categoria => aoAdicionarNovaCategoria(categoria)}
        categorias={categorias.map(categoria => categoria)}
      />

      {categorias.map((categoria) =>
        <Tecnologias
          key={categoria.id}
          id={categoria.id}
          nome={categoria.nome}
          cor={categoria.cor}
          mudarCor={aoMudarCorDoTime}
          tecnologias={tecnologias.filter(tecnologia => tecnologia.categoria === categoria.nome)}
          aoDeletar={aoDeletarTecnologia}
        />
      )}

      <Rodape />
    </div>
  );
}

export default App;
