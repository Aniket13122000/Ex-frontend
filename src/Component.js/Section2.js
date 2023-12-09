import React from 'react'
import './Home.css'
import img1 from '../Assets/image.png';
import img2 from '../Assets/Frame.png';
import logo from '../Assets/logos.png'
function Section2() {
  return (
<>
<div style={{display:"flex",width:"100%",marginTop:"100px"}}>
    <div style={{width:"50%",display:"flex",justifyContent:"center"}}>
        <div style={{width:"80%",marginLeft:"150px"}}>
            <br />
     <h2 style={{fontSize:"40px",fontWeight:"600"}}>Building Brands <br /> in the <span style={{color:"#6153CD"}}>Digital Age</span> </h2>
     <br />
     <p>Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.</p>
     <br />
     <button className='btn'>Learn More</button>
    </div>
    </div>
    <div style={{width:"50%",display:"flex",justifyContent:"center"}}>
   <div  style={{width:"60%",position:"relative"}}>
<img src={img1} alt="" style={{width:"400px",height:"auto"}} /><img style={{position:"absolute",width:"150px",right:"-20px",bottom:"-40px"}} src={img2} alt="" />
   </div>
    </div>
</div>

<p style={{textAlign:"center",fontWeight:"600",marginTop:"50px"}}>Powering next-gen companies</p>
<br />
<div style={{display:"flex",justifyContent:"center"}}>
    <img src={logo} alt="" />
</div>
</>
  )
}

export default Section2