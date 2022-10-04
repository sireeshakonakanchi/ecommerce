import React from 'react'
import ProductRating from './ProductRating';


export default function ProductDescription({desc,rating}) {
 

  return (
    
    <div>
    <div className="md-3 d-flex">
    <ProductRating rating={rating} />
    </div>
     
     {
    // <ul>
    // <li>{desc}</li>
    // </ul>   
     <ul className='mt-3 '   style={{fontSize:"13px"}}>
     <li id='desc'>{desc[0]}</li>
     <li  id='desc'>{desc[1]}</li>
     <li id='desc'>{desc[2]}</li>
     <li id='desc'>{desc[3]}</li>
     <li id='desc'>{desc[4]}</li>

     </ul>

     }
    </div>
  )
}

