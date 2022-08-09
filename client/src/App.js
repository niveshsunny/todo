import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/Register";
import { useSelector } from "react-redux";



function App() {
  

let thecolor = useSelector((state) => state.thecolor.mycolor);
   

  return (
      
    <div className={thecolor}>

    <Router>
      
       <Navbar/>     
         <Routes>
        <Route path="/login" element={<Login />}/>
        
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
   
   </div>
  );
}

export default App;
