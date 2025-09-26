import logo from './logo.svg';
import './App.css';
import Lista from './Lista';
import Footer from './Footer';

function App() {
  let estudiantes = [
    {nombre: "Fulanito", apellido:"De Tal" },
    {nombre: "Peranito", apellido:"Perez"},
    {nombre: "Menganito", apellido:"Rivera"},
  ];
  return (
    <div className="App">
    <Lista listaestudiantes={estudiantes}/>
    <Footer/>
    </div>
  );
}

export default App;
