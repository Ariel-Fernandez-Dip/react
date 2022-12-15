import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {} from 'react-router-dom';
import Navbar from './navbar/navbar';
import Itemlistcontainer from './itemlistcontainer/itemlistcontainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Itemlistcontainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:category' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
