
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForms';
import React, { useState } from 'react';
import Alert from './components/Alert';




function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)

  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode has been enabled","success")

  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("light mode has been enabled","success")

  }
  }
  return (
    <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3 ">
    <TextForm showAlert={showAlert}heading ="Enter The Text To Analyze" mode={mode}/>
   {/* <About/> */}
  </div>
  
    </>
  );
}
    
export default App;
