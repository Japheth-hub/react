import React, {useState} from 'react';


function Tabla({nombre}) {

  const lista = ['Nombre', 'Apellido', 'Pais'];
  const datos = {
    Nombre: 'Angel',
    Apellido:'Ramirez',
    Pais:'Mexico',
    Edad:'25 años'
  }

  return (
    <div>
      <table>
        <tr>
          <th>Ususario</th>
          <th>Edad</th>
          <th>Sexo</th>
          <th>Estado Civil</th>
        </tr>
            {nombre}
      </table>
    </div>
  );
}

export default Tabla;