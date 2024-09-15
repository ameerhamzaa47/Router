import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {
    let {Component}=props
    let navigate= useNavigate()
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(!login){
            navigate('/Login')
        }
    })
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected
