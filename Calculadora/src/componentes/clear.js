import React from "react";
import '../hojas-de-estilo/clear.css'

const BotonClear = (props) => (
  <div className="clear"
  onClick={props.manejarClear}>
    {props.children}
  </div>

);

export default BotonClear