
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert"


function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Switch to dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black"
      setModeText("Switch to light mode")
      showAlert("Switched to Dark mode", "success")

      document.title = "text1 utile - dark mode "

      setInterval(() => {
        document.title = "text1 utile - dark mode "
      }, 1000);

      setInterval(() => {
        document.title = "please registered your self"
      }, 5000);


    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      setModeText("Switch to dark Mode");
      showAlert("Switched to Light mode", "success")
    }
  }
  return (
    <>
      
        <Navbar title="textUtile" aboutText="about" mode={mode} modeText={modeText} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
        
     
    </>
  );
}

export default App;
