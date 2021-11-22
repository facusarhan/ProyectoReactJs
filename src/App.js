import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/navBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/itemListContainer';



function App() {
  return (

    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
