import React from "react";
import "../hojas-de-estilo/Testimonio.css"//Importamos el archivo de los estilos para nuestra app

//Aqui creamos nuestro componente como una funcion en js (podemos usar props) y entre las llaves se coloca la funcion return() para devolver el componente creado
//Tambien vemos como en lugar de colocar texto o datos fijos, estamos colocando (props.) a cada elemnto para poder reutilizar codigo
function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" 
      src={require(`../imagenes/testimonio-${props.imagen}.png`)} 
      alt="Nombre del testimonio"  />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
} 
//Se exporta el archivo por default para que lo pueda recibir otro archivo
export default Testimonio;