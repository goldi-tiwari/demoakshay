import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./component/design.css"
import Parking from "./component/parking";
import Parking_Lot from "./component/parking_Lot";
import "./component/P-lot.css"


function App() {
  return (
  <>
      

       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Parking/>}></Route>
        <Route path="/Parking_Lot" element={<Parking_Lot/>}></Route>
        <Route path="/parking" element={<Parking/>}></Route>
       </Routes>
       </BrowserRouter>
   
 
  </>
  );
}

export default App;

