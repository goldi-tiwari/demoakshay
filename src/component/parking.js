import React,{useState} from "react";
// import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function Parking() {
  const[Inputs, setInputs] = useState('');
  const[data, setData] = useState([]);
  const navigate = useNavigate();

  const handlesubmit = (e) =>{
    e.preventDefault();
    setInputs('')

    const newdata = Array.from({length:Number(Inputs)}, (_,index) => (index + 1))

    const update = [...data, ...newdata]

    setData(update);

    navigate("/Parking_Lot", {state: {data: update}})



  }

    return ( 
    <>
    <div className="background_img">
     <div className="header">
    <br></br>
    <br></br>
      <h2><b>Enter Parking Space</b> </h2>
      
      <form onSubmit={handlesubmit}>
       <input className="text" 
     type="number"
      placeholder="Number"
      value={Inputs}
      onChange={(e) => setInputs(e.target.value)}
      ></input>
     <br></br>
     <div className="btn">
      
     <Button variant="contained" className="btn" type="submit">SET SPACE</Button>
    
      </div>

      </form>
     </div>
       </div>
 
    </>
    );
  }
  
  export default Parking;
  
