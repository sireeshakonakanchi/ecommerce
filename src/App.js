
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EachLaptop from './Components/EachProduct/EachLaptop';
import EachProduct from './Components/EachProduct/EachProduct';
import EachTvs from './Components/EachProduct/EachTvs';
import Home from './Components/Home/Home';
import Laptops from './Components/Laptops/Laptops';
import Navbar from './Components/Layout/Navbar';
import ProductDesign from './Components/Products/ProductDesign';
import Tvs from './Components/Tvs/Tvs';
import data from './db.json';
export const ProductContext = createContext();


function App() {
  const [state,setState] = useState(data)
  return (
    <div >
    <ProductContext.Provider value={state}>
    <Navbar />
    <div style={{marginTop:"50px"}}>
    <Routes>
    <Route path='/' element={<Home/>}>Mobile</Route>
    <Route path='/mobiles' element={<ProductDesign/>}>Mobile</Route>
    <Route path='/laptop' element={<Laptops/>}>Laptop</Route>
    <Route path='/:id' element={<EachLaptop/>}>Laptop</Route>
    <Route path='/tvs' element={<Tvs/>}>TVs</Route>
    <Route path='/each/:id' element={<EachProduct/>}>TVs</Route>
    <Route path='/tv/tvs/:id' element={<EachTvs/>}>TVs</Route>
  </Routes>
  </div>
   </ProductContext.Provider>
  {/* <Navbar/>
    <Routes>
    <Route path='/' element={<ProductDesign/>}>Mobile</Route>
    <Route path='/laptop' element={<Laptops/>}>Laptop</Route>
    <Route path='/tvs' element={<Tvs/>}>TVs</Route>
    <Route path='/each/:id' element={<EachProduct/>}>TVs</Route>
  </Routes>*/}
   
    </div>
  );
}

export default App;
