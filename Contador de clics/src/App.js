import './App.css';
import freeCodeCamp from './imagenes/FreeCodeCamp_logo.svg.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics +1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo' src={freeCodeCamp}  alt='Logo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics= {numClics} />
        <Boton 
          texto = 'Clic'
          botonClic = {true}
          manejarClic = {manejarClic}
        />
        <Boton 
        texto = 'Reiniciar'
        botonClic = {false}
        manejarClic = {reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
