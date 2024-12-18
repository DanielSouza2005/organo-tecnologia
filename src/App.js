import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Tecnologias from './componentes/Tecnologias';
import Rodape from './componentes/Rodape';
import Organizacao from './componentes/Organizacao';

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
      favorito: false,
      nome: 'HTML',
      imagem: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CSS',
      imagem: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'React',
      imagem: 'https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'C#',
      imagem: 'https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Java',
      imagem: 'https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Python',
      imagem: 'https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_960_720.png',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kotlin',
      imagem: 'https://pbs.twimg.com/profile_images/1399329694340747271/T5fbWxtN_400x400.png',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Swift',
      imagem: 'https://cdn.icon-icons.com/icons2/1826/PNG/512/4202060logosocialsocialmediaswift-115628_115673.png',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Flutter',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsALO5bgLpufyb9XWPkphMXf6U46gOal1Ww&s',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'React Native',
      imagem: 'https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'React',
      imagem: 'https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Node JS',
      imagem: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TypeScript',
      imagem: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Tailwind',
      imagem: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'C#',
      imagem: 'https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Java',
      imagem: 'https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Delphi',
      imagem: 'https://cdn-icons-png.flaticon.com/512/5968/5968252.png',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Python',
      imagem: 'https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_960_720.png',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Julia',
      imagem: 'https://ih1.redbubble.net/image.1456787536.6081/st,small,507x507-pad,600x600,f8f8f8.jpg',
      categoria: categorias[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Python',
      imagem: 'https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_960_720.png',
      categoria: categorias[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'R',
      imagem: 'https://ih1.redbubble.net/image.522667280.1514/st,small,507x507-pad,600x600,f8f8f8.u3.jpg',
      categoria: categorias[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Scala',
      imagem: 'https://raw.githubusercontent.com/OlegIlyenko/scala-icon/master/scala-icon.png',
      categoria: categorias[5].nome
    },
  ];

  const [tecnologias, setTecnologias] = useState(inicial);

  const [organizacaoOculta, setOrganizacaoOculta] = useState(false);

  const aoAdicionarNovaTecnologia = (tecnologia) => {
    setTecnologias([...tecnologias, tecnologia]);
  };

  const aoAdicionarNovaCategoria = (categoria) => {    
    setCategorias([...categorias, categoria]);
  };

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
  };

  function aoFavoritarTecnologia(id){
    setTecnologias(tecnologias.map(tecnologia => {
      if (tecnologia.id === id) {
        tecnologia.favorito = !tecnologia.favorito;        
      }

      return tecnologia;
    }));
  };

  function aoOcultarOrganizacao(){
    setOrganizacaoOculta(!organizacaoOculta);
  }

  return (
    <div className="App">
      <Banner />

      <Formulario
        tituloTecnologia="Preencha os dados para criar o card da Tecnologia"
        tituloCategoria="Preencha os dados para criar uma Categoria"
        aoCadastrarTecnologia={tecnologia => aoAdicionarNovaTecnologia(tecnologia)}
        aoCadastrarCategoria={categoria => aoAdicionarNovaCategoria(categoria)}
        categorias={categorias.map(categoria => categoria)}
      />

      <Organizacao 
        titulo="Minhas Tecnologias" 
        oculto={organizacaoOculta}
        aoOcultar={aoOcultarOrganizacao}
        >        
        {categorias.map((categoria) =>
          <Tecnologias
            key={categoria.id}
            id={categoria.id}
            nome={categoria.nome}
            cor={categoria.cor}
            mudarCor={aoMudarCorDoTime}
            tecnologias={tecnologias.filter(tecnologia => tecnologia.categoria === categoria.nome)}
            aoDeletar={aoDeletarTecnologia}
            aoFavoritar={aoFavoritarTecnologia}
          />
        )}
      </Organizacao>      

      <Rodape />
    </div>
  );
}

export default App;
