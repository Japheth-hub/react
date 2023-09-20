import React, {useState} from "react";
import Tabla from "./Tabla";

function Formulario(){

  const [usuario, setUsuario]=useState('');
  const [edad, setEdad]=useState('');
  const [sexo, setSexo]=useState('');
  const [civil, setCivil]=useState('');
  const [lista, setLista]=useState([]);

  // const handleChange = e => {
  //   setUsuario(e.target.value);
  //   setEdad(e.target.value);
  //   setSexo(e.target.value);
  //   setCivil(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const datoNuevo = {usuario, edad, sexo, civil};
    setLista([...lista, datoNuevo]);

    setUsuario('');
    setEdad('');
    setSexo('');
    setCivil('');
  };


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario
          <input
          type="text"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
          />
        </label>
        <label>
          Edad
          <input
          type="text"
          value={edad}
          onChange={e => setEdad(e.target.value)}
          />
        </label>
        <label>
          Sexo
          <input
          type="text"
          value={sexo}
          onChange={e => setSexo(e.target.value)}
          />
        </label>
        <label>
          Estado Civil
          <input
          type="text"
          value={civil}
          onChange={e => setCivil(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {/* <ul>{lista.map((data) => (
                <p>Nombre: {data.valor}</p>
            ))}
      </ul> */}

      <Tabla nombre={lista.map((data) => (
                <tr>
                  <td>{data.usuario}</td>
                  <td>{data.edad}</td>
                  <td>{data.sexo}</td>
                  <td>{data.civil}</td>
                </tr>
            ))} />

    </div>
  );
}

export default Formulario;