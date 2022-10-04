import React from 'react'
import Percentage from './Percentage';



export default function ProductPrice({oprice,dprice}) {
      
  return (
    
    <div className='' style={{marginLeft:'200px'}}>
       
        
     <p className='fs-5 fw-bold '> &#8377;{ dprice.toLocaleString()}</p>

      <div>
      <span style={{textDecoration:'line-through'}}>
      {oprice.toLocaleString()}</span> &nbsp;
       <Percentage  oprice={oprice} dprice={dprice} />
      </div>
        <p className='text-success'>{
            oprice >=15000 &&'Free delivery'
        }</p>
    </div>
  )
}
