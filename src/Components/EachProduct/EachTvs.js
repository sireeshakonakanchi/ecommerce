import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../App'

export default function EachTvs() {
    const [eachTv,setEachTv] = useState([])
    const tvs = useContext(ProductContext);
    const {id} = useParams();
    useEffect(()=>{
        newTv()
    },[])
    const newTv = ()=>{
        const singletv = tvs.Televisions.find((data)=> data.id == id);
        setEachTv(singletv)
    }
  return (
    <>
    <div className="container" style={{marginTop:'100px'}}>
     <div className="row">
     <div className="col-md-6">
     <img src={eachTv.imgURL} alt="" width="600px" />
     </div>
    <div className="col-md-6">
    <h5>{eachTv.heading}</h5>
    </div>
     </div>
    </div>
    </>
  )
}
