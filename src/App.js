
import './App.css';
import TextForm from './component/TextForm';
import Navbar from './component/Navbar';
import React, { useState } from 'react';
import Alert from './component/Alert';




function App() {

const [mode ,setMode] = useState("light");
const [alert, setAlert] = useState(null);

const showAlert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
}

const toggelMode = () =>{
    if (mode ===  'light'){
      setMode('dark')
      document.body.style.backgroundColor='#03203C'
      showAlert("dark mode on", "success");
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode on", "success");
    }
}

  return (
    <>
    
      <Navbar  title='SAROZ' mode={mode} toggelMode={toggelMode} />
      <Alert alert={alert} />
     
      <TextForm heading="Enter the text" mode={mode} showAlert={showAlert} />
          
     
    </>
  );
}

export default App;
