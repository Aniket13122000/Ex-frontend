import React from 'react'
import Reactangle from '../Assets/Rectangle.png';
import coma from '../Assets/coma.png';


function Section4() {
  return (
    <div style={{display:"flex",justifyContent:"center",width:"100%",marginTop:"50px"}}>
       
        <div style={{width:"80%",display:"flex",justifyContent:"center",gap:"30px"}}>
            <div>
        <img src={coma} alt="" />
        <br />
        <img src={Reactangle} alt="" style={{width:"100%",borderRadius:"10px"}} />
            </div>
            <div style={{marginTop:"50px",maxWidth:"650px"}}>
               <p style={{color:"#47536B"}}>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”</p>
               
               <p > 
                <br />
                <br />
                <b>David Calathan</b>  - Director of Design Operations, New York</p>
            </div>
        </div>
    </div>
  )
}

export default Section4