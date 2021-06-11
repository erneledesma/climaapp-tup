import React from "react";

const Clima = ({ resultado }) => {
  if (!resultado) return null;
  const { name, main, sys } = resultado;
  const description = resultado.weather["0"].description;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h4>
          El clima en {name}, {sys.country}: {description}
        </h4>
        <h4>
          Temp. <p className="temperatura">{main.temp} ºC</p>
        </h4>
        <h4>
          Humedad <p className="temperatura">{main.humidity} %</p>
        </h4>
      </div>
    </div>
  );
};

export default Clima;
