import { Minus } from 'lucide-react'
import React from 'react'

const ButtonMinus = ({acc}) => {

    const click = () => {
        console.log(acc);
       return acc--
       };

  return (
    <button onClick={click}><Minus/></button>
  )
}



export default ButtonMinus