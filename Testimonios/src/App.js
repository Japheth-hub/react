import './App.css';//Importamos nuestros estilos
import Testimonio from "./componentes/Testimonio";//Importamos nuestro comoponente de la carpeta seleccionada(debemos exportar el componente de ese archivo para recibirlo aqui)

//Aqui tenemos otro componente y dentro estamos llamando a nuestro componente creado en otro archivo js de esta manera (<testimonio />)
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
        //En este ejmplo estamos asignando valor a las (props) que colocamos en nuestros archivo (Testimonio) para hacer nuestra aplicacion mas dinamica
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de sorftware"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida"
        />
        <Testimonio 
          nombre="Sara Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de sorftware"
          empresa="ChatDesk"
          testimonio=" freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble"
        />
        <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniera de sorftware"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        />
      </div>
    </div>
  );
}

//Exportamos nuestro archivo para que otro lo reciba
export default App;
