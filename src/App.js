import { Fragment, useState, useEffect } from "react";
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';


function App() {

    // state del formulario
    const [busqueda, guardarBusqueda] = useState({
      ciudad: '',
      pais: ''
  });

  const [consultar, guardarConsulta] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [ error, guardarError] = useState(false)

  // extraer ciudad y el pais
  const { ciudad, pais } = busqueda;

  useEffect(() => {
   const consultarApi = async () => {

    const appId = '0a560d294584f280f622fecd2de96637';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    guardarResultado(resultado);
    guardarConsulta(false);

    // detecta si hubo un error en el resultado
    if( resultado.cod ==='404'){
      guardarError(true)
    } else {
      guardarError(false)
    }


   }
   consultarApi();
    
  }, [consultar]);

  let componente;

  if(error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima 
                    resultado={resultado} />
  }

  return (
   <Fragment>
      <Header 
        titulo = 'Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">

            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
               />
            </div>

            <div className="col m6 s12">
              {componente}
            </div>

          </div>
        </div>
      </div>
   </Fragment>
  );
}

export default App;
