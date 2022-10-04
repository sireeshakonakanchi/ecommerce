import React from 'react'
import PercentageLaptop from './PercentageLaptop'

export default function LaptopPrice({oprice,dprice}) {
  return (
    <>
    <div className='' style={{marginLeft:'200px'}}>
       
        
     <p className='fs-5 fw-bold '> &#8377;{ dprice.toLocaleString()}</p>

      <div>
      <span style={{textDecoration:'line-through'}}>
      {oprice.toLocaleString()}</span> &nbsp;
       <PercentageLaptop oprice={oprice} dprice={dprice} />
      </div>
        <p className='text-success'>{
            oprice >=20000 &&'Free delivery'
        }</p>
    </div>
    </>
  )
}
