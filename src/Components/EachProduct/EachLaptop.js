import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../../App'

export default function EachLaptop() {
    const[eachLaptop,setEachLaptop] = useState([])
    const data = useContext(ProductContext);
    const {id} = useParams();
    useEffect(()=>{
        newLaptop()
    },[])
    const  newLaptop = ()=>{
        const singleLaptop = data.laptops.find((data)=> data.id == id )
      setEachLaptop(singleLaptop);
    }
  return (
    <>
    <div className="container my-5 ">
    <div className="row d-flex justify-content-center">
    <div className="col-md-5">
    <img src={eachLaptop.imgURL} alt=""  width="450px"  id='attach'/>
     </div>
    <div className="col-md-7 mt-5 ">
    <h3>{eachLaptop.heading}</h3>
     <p>{eachLaptop.description}</p>
      
<Link to="/" className='btn btn-primary ' >Back To Home</Link>
   
</div>
</div>
</div>
    </>
  )
}
