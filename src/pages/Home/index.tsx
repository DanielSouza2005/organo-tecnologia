import Formulario from '../../componentes/Formulario';
import Tecnologias from '../../componentes/Tecnologias';
import Organizacao from '../../componentes/Organizacao';

import { useCategorias } from '../../hooks/Categorias';

function Home() {

  const { categorias } = useCategorias();

  return (
    <>
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
    </>
  );
}

export default Home;
