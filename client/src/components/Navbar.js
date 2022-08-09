import React from 'react'
import {Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "./homestyle.css";
// import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { newcolor } from '../redux/actions';
const Navbar = () => {


   const dispatch = useDispatch();
const handle = ()=>{
  dispatch(newcolor("newcolors"));
}
const handlec = ()=>{
  dispatch(newcolor("pagecolor"));
}

  return (
    <div >
   <nav className="navbar .navbar-fixed-top navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="./test.ico" alt="sfd" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
        </li>        
        <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>


        <li className="nav-item" style={{padding:"10px"}}>
          <button   onClick={handle} style={{borderRadius:"90%", height:"25px",backgroundColor:"#FFFBB1"}} type="button" className="btn "></button>
      
        </li> 
        <li className="nav-item"style={{padding:"10px"}}>
          <button onClick={handlec} style={{borderRadius:"90%", height:"25px",backgroundColor:"#B5FFFC"}} type="button" className="btn "></button>
        </li> 
     

      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar