import React from 'react'
import Vector from '../Assets/Vector.png'
import "./Home.css"
function Navbar() {
  return (
   <>
   <div style={{width:"100%",height:"70px",display:"flex"}}>
    <div style={{display:"flex",alignItems:"center",width:"60%",gap:"15px"}}>
      <img src={Vector} alt="" style={{height:"40px",marginLeft:"10%"}} /><h2>Digital Agency</h2>
    </div>
    <div style={{display:"flex",alignItems:"center",width:"40%",gap:"30px"}}>

<h2 style={{fontSize:"18px"}}>About</h2>
<h2  style={{fontSize:"18px"}}>Service</h2>
<h2  style={{fontSize:"18px"}}>Projects</h2>
<div className='btn'>
Get In Touch
</div>
    </div>
   </div>
   </>
  )
}

export default Navbar