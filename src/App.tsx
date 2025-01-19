import { useContext } from 'react';

import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Tecnologias from './componentes/Tecnologias';
import Rodape from './componentes/Rodape';
import Organizacao from './componentes/Organizacao';

import { CADASTRAR_TECNOLOGIA, DELETAR_TECNOLOGIA, FAVORITAR_TECNOLOGIA } from "./reducer/Tecnologias";

import { CategoriaContext } from './context/Categoria';

import { ITecnologia } from './shared/interfaces/iTecnologia';
import { TecnologiaContext } from './context/Tecnologia';

function App() {

  const { categorias } = useContext(CategoriaContext)!;
  const { dispatchTecnologias } = useContext(TecnologiaContext)!;

  const aoAdicionarNovaTecnologia = (tecnologia : ITecnologia) => {
    dispatchTecnologias({
      tipo: CADASTRAR_TECNOLOGIA,
      tecnologia: tecnologia
    });
  };

  function aoDeletarTecnologia(id : string) {
    dispatchTecnologias({
      tipo: DELETAR_TECNOLOGIA,
      id: id
    });
  };

  function aoFavoritarTecnologia(id : string) {
    dispatchTecnologias({
      tipo: FAVORITAR_TECNOLOGIA,
      id: id
    });
  };

  return (
    <div className="App">
      <Banner 
        textoAlternativo="Banner principal da Página das Tecnologias usadas no Desenvolvimento"
      />

      <Formulario
        tituloTecnologia="Preencha os dados para criar o card da Tecnologia"
        tituloCategoria="Preencha os dados para criar uma Categoria"
        aoCadastrarTecnologia={tecnologia => aoAdicionarNovaTecnologia(tecnologia)}
      />

      <Organizacao
        titulo="Minhas Tecnologias"
      >
        {categorias.map((categoria) =>
          <Tecnologias
            key={categoria.id}
            categoria={categoria}
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
