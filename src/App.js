import React,{useState} from "react";

import './App.css';
import Login from "./components/Login";

import  Register from "./components/Register";


const App = () => {
  const [currentflow ,setcurrentflow] = useState(' ');

  const toggleForm=(formName)=>{
setcurrentflow(formName);
  };
  return (
    <>
    <div className="App">
     {
      currentflow === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
     }
    
  
    </div>
    </>
  );
};

export default App;
