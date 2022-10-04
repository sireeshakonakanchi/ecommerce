
import React, { createContext,  useState } from 'react';
import data from '../db.json';
import Scrapdesign from './Scrapdesign'
export const ProductContext = createContext()
export default function Scrap() {
const [product,setProduct] = useState(data);

  return (
    <>
    <ProductContext.Provider value={product}>
     <Scrapdesign/>
    </ProductContext.Provider>
    </>
  )
}
