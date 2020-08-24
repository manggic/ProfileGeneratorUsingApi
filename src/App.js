import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./card"
import Axios from "axios";

function App() {

  const [ details, setDetails] = useState({});
  
   const handleGenerator = async ()=>{
         console.log("handle")
         const { data } = await Axios.get('https://randomuser.me/api/');        
         setDetails(data.results[0]) 
   }
   
   useEffect(()=>{
    console.log('her')
     handleGenerator();
 },[] );

  return (
    <div className="contain" >
       <button  className="btn btn-primary m-5" onClick={ handleGenerator   } >Generate</button>
       <Card details = { details } />
    </div>
  );

  
 
}

export default App;
