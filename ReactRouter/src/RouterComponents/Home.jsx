import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  let navigation = useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <br/>
      <button onClick={()=> navigation('/About us') }>About Us</button>
      <br/>
      <button onClick={()=> navigation('/Filter') }>Filter</button>
    </div>
  )
}

export default Home
