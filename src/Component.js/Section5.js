import React from 'react'
import img1 from '../Assets/1.png';
import img2 from '../Assets/2.png';
import img3 from '../Assets/3.png';
function Section5() {
  return (
   <>
   <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
    <div style={{width:"80%"}}>
  <h2 style={{fontSize:"40px",fontWeight:"600",textAlign:"center"}}>Blogs</h2>
    </div>

   </div>
   <div style={{display:"flex",justifyContent:"center",marginTop:"30px",marginBottom:"200px"}}>
    <div style={{width:"80%",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"50px"}}>
     <div style={{position:"relative"}}>
       <img src={img1} alt="" style={{width:"300px"}} />
       <div style={{position:"absolute",width:"230px",top:"80%",padding:"10px",backgroundColor:"white",left:"70px"}}>
        <p style={{fontSize:"18px",marginBottom:"10px"}}>Realtime analytics</p>
        <p style={{fontSize:"15px"}}>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us.  </p>
       </div>
     </div>
     <div style={{position:"relative"}}>
       <img src={img2} alt="" style={{width:"300px"}} />
       <div style={{position:"absolute",width:"230px",top:"80%",padding:"10px",backgroundColor:"white",left:"70px"}}>
        <p style={{fontSize:"18px",marginBottom:"10px"}}>Realtime analytics</p>
        <p style={{fontSize:"15px"}}>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us.  </p>
       </div>
     </div>
     <div style={{position:"relative"}}>
       <img src={img3} alt="" style={{width:"300px"}} />
       <div style={{position:"absolute",width:"230px",top:"80%",padding:"10px",backgroundColor:"white",left:"70px"}}>
        <p style={{fontSize:"18px",marginBottom:"10px"}}>Realtime analytics</p>
        <p style={{fontSize:"15px"}}>“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us.  </p>
       </div>
     </div>
    </div>

   </div>
   </>
  )
}

export default Section5