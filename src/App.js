import './App.css';
import Navbar from './My-Components/Navbar';
import TextForm from './My-Components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// // import Alert from './My-Components/Alert';
// import About from './My-Components/About';

function App() {
const [mode, setMode] = useState("light");// whether dar mode is enabled or not

const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert ({
    msg: message,
    type: type
  })

}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled", "success");


  }
}

  return (
    
    <>

    {/* <Navbar title = "Textutils" aboutText ="About TextUtils"/>
    <Navbar/> */}
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode}/>
    <alert alert={alert}/>
    <div className='container my-3'>

    {/* <Routes>
      <Route exact path="about" element={<About />}>
      </Route> */}
      {/* <Route exact path="TextForm" element={ */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode ={mode} /> 
 {/* }> */}
             {/* </Route>
    </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
