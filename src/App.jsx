import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemDetailContainer />} />
        <Route path="/category/:idCategory" element={<ItemListConteiner />} />
      
      </Routes>
  </BrowserRouter>

  );
}

export default App;

//<ItemCount  stock={ 10}/>