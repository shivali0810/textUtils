
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';

function App() {
  const[mode, setmode]= useState('light');
  const[alert, setalert]=useState(null)

  const showAlert=(message, type)=>{
    setalert({
    msg: message,
    type: type
    })
   setTimeout(() => {
    setalert(null);
   }, 1500);
  }

  const toggleMode=()=>{
if(mode==='light'){
  setmode('dark')
  document.body.style.background='black'
  document.body.style.color='white'
  showAlert("dark mode enabled", "success")
}
else if(mode==='dark'){
  setmode('light')
  document.body.style.background='white'
  document.body.style.color='black'
  showAlert("light mode enabled", "success")
}
  }

  return (
  <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us"/>
<Alert alert={alert}/>
<div className="container">
<TextForm heading="write your text here" showAlert={showAlert} />
</div>
{/* <About/> */}

  </>
  );
}

export default App;
