import './App.css';
import Componente from './Componentejs.';
import Estudiante from './Estudiante.js';
function App() {
  return (
    <div className="App">
      <Componente/>
      <Estudiante nombre={'juanito'} apellido={'alimaña'}/>

    </div>
  );
}

export default App;
