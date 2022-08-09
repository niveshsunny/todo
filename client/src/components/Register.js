import image from "./new.svg";

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MailTwoToneIcon from '@mui/icons-material/MailOutlined';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleOutlined';
import LockTwoToneIcon from '@mui/icons-material/LockOutlined';
const Register = () => {
 const navigate = useNavigate();

  const [user , setsuser]=useState({
    
    email:"",
    name:'',
    password:"",
    cpassword:""
  });
   
  const{name,email,password,cpassword}=user;

  const handlerevent = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setsuser({
        ...user,
        [name]:value
      })
  }

  const sendata = async (e)=>{
    e.preventDefault();
    const{name,email,password,cpassword}=user;

   await axios.post('/register', {
    name,email,password,cpassword
   })
  .then(function (response) { 
    if(response.status === 404 ){  
      window.alert("registration unsccuessful");
    } else{
      window.alert("registration successful");
    }
  })
  .catch(function (error) {
    console.log(error);
  });
    
      navigate('/home'); 
  }

  return (
  
  
   <div className='row  'style={{margin:"auto"}} >
     <div className="container_one  col-sm-4 col-md-6 " >
       <img src={image} alt="asf" className="image" />
     </div>

    <div className='container_two  col-sm-6 col-md-6  padding height' >
      <h3 style={{marginRight:"40px"}}>User Registration</h3>
      <form style={{marginLeft:"0px",marginRight:"25px",paddingTop:"20px", width:"255px"}} >  
       <div className="formstyle" >
        <label style={{marginRight:"10px"}}  htmlFor="name"><AccountCircleTwoToneIcon/></label><br />
        <input type="text"  className="form-control" placeholder='name' onChange={handlerevent} value={name} name='name'  autoComplete='off' /><br />
        </div  >
        <div className="formstyle" >
        <label style={{marginRight:"10px"}}  htmlFor="email"><MailTwoToneIcon/></label>
        <input type="email" className="form-control" placeholder='email'onChange={handlerevent} value={email} name='email' autoComplete='off' /> <br />                  
        </div >
        <div className="formstyle">
        <label style={{marginRight:"10px"}}  htmlFor="password"><LockTwoToneIcon/></label>
        <input type="password" className="form-control" placeholder='password' onChange={handlerevent} value={password} name='password' />  <br />      
        </div>
        <div className="formstyle" style={{marginBottom:"20px"}}>
        <label style={{marginRight:"10px"}}  htmlFor="email"><LockTwoToneIcon/></label>
        <input type="password" className="form-control" placeholder='confirm password' onChange={handlerevent} value={cpassword} name='cpassword' /> <br />
        </div>
        <input style={{marginBottom:"15px",borderRadius:"20px"}}  type="submit" className="form-control account testhover" name="submit" value="Create a account" onClick={sendata}  />    
       <Link  className="none" to="/login"><button style={{borderRadius:"20px"}}  className="form-control myhover lcolor">Login</button></Link>
      </form>
      
  
                                                                                                                                                         
      
      
    </div >

    </div>
    
 
    

  )
}

export default Register