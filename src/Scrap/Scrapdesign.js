import React, { useContext } from 'react'
import { ProductContext } from './Scrap'
export default function Scrapdesign() {
const scrap = useContext(ProductContext)
return (
    <div>
        {/*{JSON.stringify(scrap)*/}
        {
            scrap.mobiles.map((data)=> 
            <div>
              <img src={data.imgURL} alt="" srcset="" />
              <p>{data.heading}</p>
            </div>
            
            )
        }
    </div>
  )
}
