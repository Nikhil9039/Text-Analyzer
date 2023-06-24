import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";  //use imrs for import
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [modeType, setModeType] = useState('Enable Dark Mode');
  const [btn, setBtn] = useState('primary');
  const [alert, setAlert] = useState(null);


  //we will write a method for setAlert
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      setModeType('Enable Light Mode')
      document.body.style.backgroundColor='#03034c';
      setBtn('danger')
      showAlert("Dark Mode has been Enable", "success")
      document.title="Text Utils- Dark Mode";
      //For changing the title in a interval
      // setInterval(() => {
      //   document.title="Text Utils is amazing"
      // }, 2000);

      // setInterval(() => {
      //   document.title="Install Text Utils now"
      // }, 1500);
    }
    else{
      setMode('light')
      setModeType('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      setBtn('primary')
      showAlert("Light Mode has been Enable", "success")
      document.title="Text Utils- Light Mode";





    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      
      <Navbar title="Text Analyzer" home="Home" about="About" mode={mode} toggleMode={toggleMode} modeType={modeType} />
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Textform showAlert={showAlert} title="Enter your text to analyze" mode={mode} btnColor={btn}/>
      {/* <About/> */}
      </div>
      {/* <Routes>
      <Route exact path="/" element={<Textform showAlert={showAlert} title="Enter your text to analyze" mode={mode} btnColor={btn}/>} />  
      <Route exact path="/about" element={<About/>} />

      </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
