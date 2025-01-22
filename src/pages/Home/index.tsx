import Formulario from '../../componentes/Formulario';
import Tecnologias from '../../componentes/Tecnologias';
import Organizacao from '../../componentes/Organizacao';

import { useCategorias } from '../../hooks/Categorias';
import { ITecnologia } from '../../shared/interfaces/iTecnologia';

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
            filtro={(tecnologia : ITecnologia) => tecnologia.categoria === categoria.nome}
          />
        )}
      </Organizacao>
    </>
  );
}

export default Home;
