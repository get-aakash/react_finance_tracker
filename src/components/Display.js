import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const res = useSelector((state)=>state.data)
    console.log(res.type)
  return (
    <div>
      
    </div>
  )
}

export default Display
