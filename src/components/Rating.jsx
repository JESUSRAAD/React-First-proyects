import { Star } from 'lucide-react'
import React from 'react'

const Rating = ({num}) => {



  return (
    <div className='flex'>
        {[...Array(5)].map((star,i)=>{

return <Star key={i}  className={i<num?`text-blue-500 fill-current`:`text-black`}/>



        })}
    </div>
  )
}

export default Rating