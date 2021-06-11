import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";
import { SpinnerCircular } from "spinners-react";

function App() {
  // states
  const [loading, setLoading] = useState(false);
  const [busqueda, guardarBusqueda] = useState({ ciudad: "" });
  const [resultado, guardarResultado] = useState();
  const [error, guardarError] = useState(false);

  // extraer ciudad y el pais
  const { ciudad, pais } = busqueda;

  const consultarApi = async () => {
    setLoading(true);
    const appId = "0a560d294584f280f622fecd2de96637";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&lang=es&units=metric`;

    const respuesta = await fetch(url)
      .then((data) => data.json())
      .catch((e) => guardarError(true));

    guardarResultado(respuesta);

    // detecta si hubo un error en el resultado
    if (respuesta.cod === "404") {
      guardarError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                consultarApi={consultarApi}
                error={error}
                guardarError={guardarError}
              />
            </div>

            <div className="center-align col m6 s12">
              {error ? (
                <Error mensaje="No hay resultados" />
              ) : !loading ? (
                <Clima resultado={resultado} />
              ) : (
                <SpinnerCircular size="100" color="yellow" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
