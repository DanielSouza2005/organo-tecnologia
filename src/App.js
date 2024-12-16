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

  const inicial = [
    {
      nome: 'HTML',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      nome: 'CSS',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      nome: 'JavaScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      nome: 'React',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[0].nome
    },
    {
      nome: 'JavaScript',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[1].nome
    },
    {
      nome: 'C#',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[1].nome
    },
    {
      nome: 'Java',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[1].nome
    },
    {
      nome: 'Python',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[1].nome
    },
    {
      nome: 'Kotlin',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[2].nome
    },
    {
      nome: 'Swift',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[2].nome
    },
    {
      nome: 'Flutter',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[2].nome
    },
    {
      nome: 'React Native',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[2].nome
    },
    {
      nome: 'React',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[3].nome
    },
    {
      nome: 'Node JS',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[3].nome
    },
    {
      nome: 'TypeScript',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[3].nome
    },
    {
      nome: 'Tailwind',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[3].nome
    },
    {
      nome: 'C#',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[4].nome
    },
    {
      nome: 'Java',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[4].nome
    },
    {
      nome: 'Delphi',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[4].nome
    },
    {
      nome: 'Python',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[4].nome
    },
    {
      nome: 'Julia',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      categoria: categorias[5].nome
    },
    {
      nome: 'Python',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      categoria: categorias[5].nome
    },
    {
      nome: 'R',
      imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      categoria: categorias[5].nome
    },
    {
      nome: 'Scala',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      categoria: categorias[5].nome
    },
  ]

  const [tecnologias, setTecnologias] = useState(inicial);

  const aoAdicionarNovaTecnologia = (tecnologia) => {
    setTecnologias([...tecnologias, tecnologia]);
  };

  const aoDeletarTecnologia = () => {
    console.log("Deletando Tecnologia :)");
  };

  return (
    <div className="App">
      <Banner />

      <Formulario
        titulo="Preencha os dados para criar o card da Tecnologia"
        aoCadastrarTecnologia={tecnologia => aoAdicionarNovaTecnologia(tecnologia)}
        categorias={categorias.map(categoria => categoria.nome)}
      />

      {categorias.map((categoria, indice) =>
        <Tecnologias
          key={indice}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          tecnologias={tecnologias.filter(tecnologia => tecnologia.categoria === categoria.nome)}
          aoDeletar={aoDeletarTecnologia}
        />
      )}

      <Rodape />
    </div>
  );
}

export default App;
