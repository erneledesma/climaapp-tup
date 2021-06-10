import React, { useState } from 'react';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta }) => {

    
    const [error, guardarError] = useState(false);

      // extraer ciudad y el pais
      const { ciudad, pais } = busqueda;
    // funcion que coloca los elementos en el state

    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        });
    }

    // Cuando el user da submit al formulario
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '' || pais.trim() === '' ){
            guardarError(true)
            return;
        }
        guardarError(false);

        guardarConsulta(true)


        // pasarlo al compenente principal

    }

    return ( 
       <form
       onSubmit={handleSubmit}
       >
           <div className="input-field col s12">
               <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
                />

                <label htmlFor="ciudad">Ciudad:</label>
           </div>

           <div className="input-field col s12">
               <select
                name="pais"
                id="pais"
                value="pais"
                onChange={handleChange}
               >
                   <option value="">--Selecione un pais--</option>
                   <option value="US">Estados Unidos</option>
                   <option value="MX">Mexico</option>
                   <option value="AR">Argentina</option>
                   <option value="CO">Colombia</option>
                   <option value="ES">España</option>
                   <option value="PE">Peru</option>
               </select>
           </div>

           <div className="input-field col s12">
            <input
                type="submit"
                value="Buscar clima"
                className="waves-effect waves-light btn-large btn-block yellow accent-4"
             />

           </div>
       </form>
     );
}
 
export default Formulario;