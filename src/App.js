import './App.css';
import Home from './Home/Home';
import LogIn from './Login/LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Router>
      <Routes> 
        <Route path="/" element={<LogIn />} /> 
        <Route path="/home" element={<Home />} /> 
        {/* <Route path="/contact" element={<Contact />} />  */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
