import React, { useState } from "react";
import "../style-sheets/form-input.css"


const IngresarNum = (props) => {
const [search, setSearch] = useState("");
  return (
    <form className="contendor-form">
      <input className="input" type="text" name="search" autoComplete="off" onChange={ev => setSearch(ev.target.value)}></input>
      <button type="submit">Buscar</button>
      <p>Resultado para la cantidad de: {search}</p>

    </form>

  );
};
export default IngresarNum;