import { RefreshCw } from 'lucide-react'
import React from 'react'

const ButtonReset = ({acc}) => {

 const click = () => {
    console.log(acc);
    return  acc=0
       };

  return (
    <button  onClick={click}><RefreshCw/></button>
  )
}

export default ButtonReset