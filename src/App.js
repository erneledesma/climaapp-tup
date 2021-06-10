import { Fragment, useState, useEffect } from "react";
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

    // state del formulario
    const [busqueda, guardarBusqueda] = useState({
      ciudad: '',
      pais: ''
  });

  const [consultar, guardarConsulta] = useState(false)

  // extraer ciudad y el pais
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    console.log(ciudad)
    
  }, [consultar]);

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
              2
            </div>

          </div>
        </div>
      </div>
   </Fragment>
  );
}

export default App;
