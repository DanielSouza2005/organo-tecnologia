import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Tecnologias from './componentes/Tecnologias';
import Rodape from './componentes/Rodape';
import Organizacao from './componentes/Organizacao';

import { useCategorias } from './hooks/Categorias';

function App() {

  const { categorias } = useCategorias();

  return (
    <div className="App">
      <Banner 
        textoAlternativo="Banner principal da Página das Tecnologias usadas no Desenvolvimento"
      />

      <Formulario />

      <Organizacao
        titulo="Minhas Tecnologias"
      >
        {categorias.map((categoria) =>
          <Tecnologias
            key={categoria.id}
            categoria={categoria}
          />
        )}
      </Organizacao>

      <Rodape />
    </div>
  );
}

export default App;
