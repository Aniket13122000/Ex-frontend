import './App.css';
import HomeDesign from './Component.js/HomeDesign';
import ApiComponent from './Task2/ApiComponent';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
 
      <Routes>
        <Route path="/" element={ <HomeDesign/>}/>
         <Route path='/task2' element={<ApiComponent/>}/>
         
      
      </Routes>
   
  
   </>
  );
}

export default App;
