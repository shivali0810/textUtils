
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';

function App() {
  const[mode, setmode]= useState('light');

  const toggleMode=()=>{
if(mode==='light'){
  setmode('dark')
  document.body.style.background='black'
  document.body.style.color='white'
}
else{
  setmode('light')
  document.body.style.background='white'
  document.body.style.color='black'
}
  }

  return (
  <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us"/>
<div className="container">
<TextForm heading="write your text here" />
{/* <About/> */}
</div>

  </>
  );
}

export default App;
