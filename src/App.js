import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <h1>Bienvenido a Muscle Museum Store</h1>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:productId' element={<ItemDetailContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/cart' element={<h1>Carrito en proceso de desarrollo </h1>}/>
          <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting="Bienvenido a Muscle Museum Store"/> */}
    </div>
  );
}

export default App;
