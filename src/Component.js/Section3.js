import React from 'react'
import './Home.css';
import img1 from '../Assets/Group1.png'
function Section3() {
  return (
<>
<br /><br />
<div style={{backgroundColor:"#FBFBFB"}}>
    <br />
   <h2 style={{textAlign:"center"}}>Explore Our Services</h2>
   <p style={{color:"#47536B",textAlign:"center",marginTop:"20px"}}>We are self-service data analytics software that lets you create visually.</p>
   <br />
</div>
<div style={{display:"flex",justifyContent:"center",backgroundColor:"#FBFBFB"}}>
    <br />
  <div style={{width:"80%",display:"flex",justifyContent:"center",gap:"30px"}}>
    <div className='small_box'>
     <img src={img1} alt="" />
     <p style={{fontWeight:"600",marginTop:"10px",marginBottom:"10px"}}>App Development</p>
     <p>ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus</p>
    </div>
    <div className='small_box'>
     <img src={img1} alt="" />
     <p style={{fontWeight:"600",marginTop:"10px",marginBottom:"10px"}}>App Development</p>
     <p>ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus</p>
    </div>
    <div className='small_box'>
     <img src={img1} alt="" />
     <p style={{fontWeight:"600",marginTop:"10px",marginBottom:"10px"}}>App Development</p>
     <p>ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus</p>
    </div>
    <div className='small_box'>
     <img src={img1} alt="" />
     <p style={{fontWeight:"600",marginTop:"10px",marginBottom:"10px"}}>App Development</p>
     <p>ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus</p>
    </div>

  </div>
</div>
<div style={{backgroundColor:"#FBFBFB",display:"flex",justifyContent:"center"}}>
   
   <button className='btn' style={{marginTop:"30px",marginBottom:"30px"}}>Learn More</button>
 
</div>
</>
  )
}

export default Section3