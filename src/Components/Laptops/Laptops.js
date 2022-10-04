import React, { useContext } from 'react'
import { ProductContext } from '../../App'
import LaptopCard from './LaptopCard'

export default function Laptops() {
    const  laptop =  useContext(ProductContext)
 

  return (
    <>
     <div className="container"  style={{marginTop:'100px'}}>
     {
        laptop.laptops.map((data)=> 
        <LaptopCard  data={data} />
        )
    } 
     </div>
    </>
  )
}
