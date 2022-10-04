import React from 'react'
import {PercentageTvs} from './PercentageTvs'

export default function TvsPrice({data}) {
    const{originalPrice,discountPrice} = data
  return (
    <>
    <div className='' >
       
        
     <p className='fs-5 fw-bold '> &#8377;{ discountPrice.toLocaleString()}</p>

      <div>
      <span style={{textDecoration:'line-through'}}>
      {originalPrice.toLocaleString()}</span> &nbsp;
       <PercentageTvs  oprice={originalPrice} dprice={discountPrice} />
      </div>
        <p className='text-success'>{
            originalPrice >=15000 &&'Free delivery'
        }</p>
    </div>
    
    </>
  )
}
