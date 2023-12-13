import './App.css';
import Alert from './components/Alert.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js';
import React, {useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [theme ,setTheme] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message ,type)=>{
    setAlert({
        msg : message,
        type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(theme === 'light'){
      setTheme('dark');
      document.body.style.backgroundColor = '#043260';

      showAlert("Dark Mode Enabled" , "success");
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" abouttext = "About us" mode = {theme}  toggleMode = {toggleMode}></Navbar>
    <div className="container">
    <Alert alert = {alert}/>
    {/* <TextForm heading = "Enter the text to analyze" showAlert = {showAlert} mode = {theme}/> */}
    
      <Routes>
      
          <Route exact path="/" element ={<TextForm heading = "Enter the text to analyze" showAlert = {showAlert} mode = {theme}/>}/>
          <Route exact path="/about" element = {<About style = {theme}/>}/>

      </Routes>

    </div>
    </Router>
    </>
  );
}
export default App;
