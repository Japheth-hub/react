import './App.css';
import logo from './imagenes/fcc.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='app'>
      <div className='logo'>
        <img 
        src={logo}
        className='logo-app' />
      </div>
      <div className='lista-tareas'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
