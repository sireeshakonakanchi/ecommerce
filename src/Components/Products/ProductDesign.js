import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../App";
export default function ProductDesign() {
  const product = useContext(ProductContext)
  // const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     getProduct();
  //   }, 1000);
  // }, []);
  // const getProduct = async () => {
  //   const res = await axios.get("http://localhost:3000/mobiles");
  //   setState(res.data);
  //   setLoading(false);
  // };
  return (
    <div >
      {loading   &&
       (
        <div  style={{marginTop:'6rem'}}>
          {
            product.mobiles.map((data)=>{
              return <div>
              <ProductCard data={data}/>
               </div>
            })
          }
        </div>
      )}
    </div>
  );
}
