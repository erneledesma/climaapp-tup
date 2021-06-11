import React from "react";
import Error from "./Error";

const Formulario = ({
  consultarApi,
  busqueda,
  guardarBusqueda,
  error,
  guardarError,
}) => {
  // extraer ciudad y el pais
  const { ciudad } = busqueda;

  // funcion que coloca los elementos en el state
  const handleChange = (e) => {
    //actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el user da submit al formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar
    if (ciudad.trim() === "") {
      return guardarError(true);
    }
    guardarError(false);

    //llamada a la api y si se resuelve correctamente la Promise se limpia el formulario
    consultarApi().then(guardarBusqueda({ ciudad: "" }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
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
        <select name="pais" onChange={handleChange}>
          <option selected>--Seleccione un pais--</option>
          <option value="AR">Argentina</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">Mexico</option>
          <option value="CO">Colombia</option>
          <option value="ES">España</option>
          <option value="PE">Peru</option>
        </select>
      </div>

      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 button"
        >
          Buscar clima
        </button>
      </div>
    </form>
  );
};

export default Formulario;
