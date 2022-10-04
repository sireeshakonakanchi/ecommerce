import React from 'react'
import { Link } from 'react-router-dom'
import LaptopDescription from './LaptopDescription'
import LaptopPrice from './LaptopPrice'
export default function LaptopCard({data}) {
const {id,imgURL,heading,description,rating,offeredPrice,discountPrice} = data 
  return (
    <>
    <div className="container my-5" >
    <div className="row  d-flex justify-content-center  ">
     <div className="col-md-3">
    <Link to={`/${id}`}>  <img src={imgURL} className="img-fluid" width='250px' /> </Link>
     </div>
     <div className="col-md-6 "  >
      <h5 className=' mt-3'style={{fontSize:"18px" }} >{heading}</h5>
      <LaptopDescription desc={description}/>
   </div>
      {/*<Percentage oprice={orginalRate} dprice={discountPrice} />*/}
            <div className='col-md-3 mt-3'>
        <LaptopPrice oprice={offeredPrice}  dprice={discountPrice} />
            </div>
      </div>
   </div>
   
    </>
  )
}
