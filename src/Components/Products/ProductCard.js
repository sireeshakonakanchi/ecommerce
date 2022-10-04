import React from 'react'
import ProductDescription from './ProductDescription';
import Percentage from './Percentage';
import ProductPrice from './ProductPrice';
import { Link } from 'react-router-dom';

export default function ProductCard({data}) {
    const { id,imgURL,heading,description,rating,orginalRate,discountPrice} = data
    
  return (
    <>
    <div className="container my-5  " >
     <div className="row  d-flex justify-content-center  ">
      <div className="col-md-3">
     <Link to={`/each/${id}`} >  <img src={imgURL} className="img-fluid my-3" /> </Link>
      </div>
      <div className="col-md-4" >
       <h5 className='fw-bold mt-3'style={{fontSize:"18px" }} >{heading}</h5>
       <ProductDescription  desc={description}  rating={rating} />
    </div>
       {/*<Percentage oprice={orginalRate} dprice={discountPrice} />*/}
             <div className='col-md-5 mt-3'>
             <ProductPrice  oprice={orginalRate} dprice={discountPrice} />

             </div>
       </div>
    </div>
    </>
  )
}
