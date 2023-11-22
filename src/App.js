import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#28282B';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [alert, setAlert] = useState("");

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      Type : type
    });
    setTimeout(()=>{
        setAlert("");
    },2000);
  }

  return (
    <>
      <Navbar title="EditText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm mainHeading="Enter Text to Analyze here" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
