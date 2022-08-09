import React, {    useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import MailTwoToneIcon from '@mui/icons-material/MailOutlined';
import LockTwoToneIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
// import { useDispatch} from "react-redux";

// import { addtoken } from '../redux/actions';

const Login = () => {

  //  const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [user , setuser]=useState({
    email:"",
    password:""
    })

    const handlerevent = (e)=>{
       const name = e.target.name;
       const value = e.target.value;
       setuser({
         ...user,
         [name]:value
       })
    }

const submitevent = (e)=>{
  const{email,password}=user;
  e.preventDefault();
    axios.post("/login",{email,password})
  .then((response)=>{
    if(response.status === 422){
      window.alert("Invalid Credentials");
    }else{     
      //  dispatch(addtoken(response.data.token));
       console.log(response.data.token);
       navigate("/home")
        
      
    }})
  .catch((err)=>{console.log(err);});
}


  return (
<div className="testing " >
      <div className="row " style={{margin:"auto"}}>
       
        <div className='col-md-6 logincontainer_1'>
          <h1 > Welcome Back !</h1>
          <h4>Sign in to access...</h4>

        </div>
     
        <div className='logincontainer  col-md-6   padding height'>
            <form className="form" > 
            <h2 style={{marginBottom:"30px"}} >Sign In </h2>
              <div className="formstyle" >
                   <label style={{marginRight:"20px"}} htmlFor="email"><b><MailTwoToneIcon/></b></label>
                  <input  type="email" className="form-control" onChange={handlerevent} placeholder="Enter email" name="email" value={user.email} autoComplete='off' required/>
                  </div>
              <div className="formstyle" style={{marginBottom:"30px"}} >
                   <label style={{marginRight:"20px"}} htmlFor="password"><b>< LockTwoToneIcon/></b></label>
                  <input type="text" className="form-control" onChange={handlerevent} placeholder="Enter password" autoComplete='off' value={user.password} name="password" required/> 
              </div>
              <div style={{display:"flex",flexDirection:"column",textAlign:"center"}}>
             <input type="submit" style={{borderRadius:"20px",marginBottom:"20px"}} className="form-control account testhover" value="Log in" onClick={submitevent} />
             
              </div>

   
             <p>New here? <Link to="/register" style={{}}> Create an Account</Link></p>
              </form>
        </div>
         </div>
    </div>
  )
}

export default Login