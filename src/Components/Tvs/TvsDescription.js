import React from 'react'
import TvsRating from './TvsRating'

export default function TvsDescription({data}) {
    const {description,rating} = data
  return (
    <>
    <div className="mt-2">
    <TvsRating  rating={rating}/>
    </div>
    <ul className='mt-3' style={{fontSize:"16px"}}>
    <li id="desc">{description[0]}</li>
    <li id="desc">{description[1]}</li>
    <li id="desc">{description[2]}</li>
</ul> 
    </>
  )
}
