import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
//import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Muscle Museum Store"/>
    </div>
  );
}

export default App;
