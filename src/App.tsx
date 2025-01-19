import { useContext } from 'react';

import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Tecnologias from './componentes/Tecnologias';
import Rodape from './componentes/Rodape';
import Organizacao from './componentes/Organizacao';

import { CADASTRAR_TECNOLOGIA, DELETAR_TECNOLOGIA, FAVORITAR_TECNOLOGIA } from "./reducer/Tecnologias";
import { CADASTRAR_CATEGORIA, TROCAR_COR_CATEGORIA } from "./reducer/Categorias";

import { CategoriaContext } from './context/Categoria';

import { ICategoria } from './shared/interfaces/iCategoria';
import { ITecnologia } from './shared/interfaces/iTecnologia';
import { TecnologiaContext } from './context/Tecnologia';
import { OrganizacaoContext } from './context/Organizacao';

function App() {

  const { categorias, dispatchCategorias } = useContext(CategoriaContext)!;
  const { dispatchTecnologias } = useContext(TecnologiaContext)!;
  const { organizacaoOculta, setOrganizacaoOculta } = useContext(OrganizacaoContext)!;

  const aoAdicionarNovaTecnologia = (tecnologia : ITecnologia) => {
    dispatchTecnologias({
      tipo: CADASTRAR_TECNOLOGIA,
      tecnologia: tecnologia
    });
  };

  const aoAdicionarNovaCategoria = (categoria : ICategoria) => {
    dispatchCategorias({
      tipo: CADASTRAR_CATEGORIA,
      categoria: categoria
    });
  };

  function aoDeletarTecnologia(id : string) {
    dispatchTecnologias({
      tipo: DELETAR_TECNOLOGIA,
      id: id
    });
  };

  function aoMudarCorCategoria(cor : string, id : string) {
    dispatchCategorias({
      tipo: TROCAR_COR_CATEGORIA,
      id: id,
      cor: cor
    });
  };

  function aoFavoritarTecnologia(id : string) {
    dispatchTecnologias({
      tipo: FAVORITAR_TECNOLOGIA,
      id: id
    });
  };

  function aoOcultarOrganizacao() {
    setOrganizacaoOculta(!organizacaoOculta);
  }

  return (
    <div className="App">
      <Banner 
        textoAlternativo="Banner principal da Página das Tecnologias usadas no Desenvolvimento"
      />

      <Formulario
        tituloTecnologia="Preencha os dados para criar o card da Tecnologia"
        tituloCategoria="Preencha os dados para criar uma Categoria"
        aoCadastrarTecnologia={tecnologia => aoAdicionarNovaTecnologia(tecnologia)}
        aoCadastrarCategoria={categoria => aoAdicionarNovaCategoria(categoria)}
      />

      <Organizacao
        titulo="Minhas Tecnologias"
        oculto={organizacaoOculta}
        aoOcultar={aoOcultarOrganizacao}
      >
        {categorias.map((categoria) =>
          <Tecnologias
            key={categoria.id}
            categoria={categoria}
            mudarCor={aoMudarCorCategoria}            
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
