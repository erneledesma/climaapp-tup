import React from 'react';

const Clima = ({ resultado }) => {

    const { name, main } = resultado;

    if(!name) return null;

    const kelvin = 273.15;


    return (  
        <div className="card-panel white col s12">
            <div className="black-text">
            <h3>El clima de {name}  es: </h3>
            <p className="temperatura">Cº{( main.temp - kelvin).toFixed(2)}</p>
           
            </div>
        </div>
    );
}
 
export default Clima;