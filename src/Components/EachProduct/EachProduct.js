// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import EachCard from "./EachCard";
// import {  useParams } from "react-router-dom";

// export default function EachProduct() {
//   const [product, setProduct] = useState([]);
  
//   const [loading, setLoading] = useState(true);
//    const {id}= useParams();
 
//   useEffect(() => {
//   console.log(id)
//     setTimeout(() => {
//      getProduct();
//      setLoading(false);
//     }, 1000);
//   }, []);
//   const getProduct = async () => {
//     const res = await axios.get(`http://localhost:3000/mobiles/${id}`);
//     setProduct(res.data);
     

//   };
//   return (
//     <div >
      
//       {loading ? (
//         <h2 className="text-warning text-center fs-4 my-5">Loading...</h2>
//       ) : (
//         <div >
//           {product.map((data) => (
//             // data.description[i]
//             <div className="container my-5"  >
//      <div className="row  d-flex justify-content-center  ">
//       <div className="col-md-5">
//        <img src={data.imgURL} className="img-fluid my-3" />
//       </div>
//       <div className="col-md-7" >
//        <h5 className='fw-bold'style={{fontSize:"18px" }} >{data.heading}</h5>
//     </div>
       
//        </div>
//     </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../../App';

export default function EachProduct() {
  const[singleData,setSingleData] = useState([]);
const data = useContext(ProductContext)
const {id} =useParams();
useEffect(()=>{
singleUser()
},[])
const singleUser = ()=>{
const newProduct = data.mobiles.find((data)=> data.id ===id)
  setSingleData(newProduct)
}
  return (
    <div>
      <div className="container my-5 ">
      <div className="row d-flex justify-content-center">
      <div className="col-md">
      <img src={singleData.imgURL} alt=""  id='attach'/>
       </div>
      <div className="col-md mt-5">
      <h6>{singleData.heading}</h6>
       <p>{singleData.description}</p>
        {/*  <ul >
         <li>{singleData.description[0]}</li>
         <li>{singleData.description[1]}</li>
         <li>{singleData.description[2]}</li>
         <li>{singleData.description[3]}</li>
         <li>{singleData.description[4]}</li>
  <li>{singleData.description[5]}</li>  </ul> */}
  <Link to="/" className='btn btn-primary ' >Back To Home</Link>
     
  </div>
      </div>

      </div>
    </div>
  )
}













