import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {itemListContainer} from './components/itemListContainer';
import{ItemCount} from './components/itemCount';

function App() {
  return (

    <div className="App">
      <NavBar/>
      <itemListContainer titulo='Ropa SportWere' contenido='Esta Marca esta inspirada en el Renasimiento y el movimiento Sportwere'>
        <ItemCount/>
      </itemListContainer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
