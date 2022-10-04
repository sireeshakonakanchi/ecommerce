import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../App'
import TvsDescription from './TvsDescription'
import TvsPrice from './TvsPrice'

export default function Tvs() {
  const tvs = useContext(ProductContext)
  return (
    <>
    <div className="container " style={{marginTop:"100px"}}>
    {
      tvs.Televisions.map((data)=>{
return    <div className="row mt-5">

         <div className="col-md-4">
       <Link to={`/tv/tvs/${data.id}`}>   <img src={data.imgURL} width="350" /> </Link>
         </div>
         <div className="col-md-6">
          <h5>{data.heading}</h5>
          <TvsDescription data={data}/>
         </div> 
         <div className="col-md">
         <TvsPrice data={data}/>
         </div>
</div>
      })
    }
    </div>     
  
            
    </>
  )
}
