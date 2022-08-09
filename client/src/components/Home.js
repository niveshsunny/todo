import React,{  useEffect, useState} from 'react'
import axios from "axios";
import "./homestyle.css";
import {  useSelector } from "react-redux";
import Todoitem from './Todoitem';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';


import { useNavigate } from 'react-router-dom';
const Home = () => {

let thetoken = useSelector((state) => state.thetoken.mytoken);
    const navigate = useNavigate();
  const[list,setlist]=useState('')
  const[alllist,managelist]=useState([])

useEffect( ()=>{
   
  axios.get ('/todo',{
            headers: {
                'x-token' : thetoken
            }
        }).then(res =>managelist(res.data)).catch((err) => console.log(err))

    //              if(!thetoken){
    //     return navigate("/login")
    // }
   
    

  

});

  const handlerevent = (e)=>{
    const newvalue = e.target.value
    setlist(newvalue)
  }

  const submitevent = async(e)=>{
          e.preventDefault();
        
          managelist(previousitem =>{
            return [...previousitem,list]
          });

        await  axios.post('/postlist', {list:[list]},{
            headers: {
                'x-token' : thetoken
            }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

          
          setlist('') ;
  }

  const deleteitems= async(text)=>{
          managelist(prvitem =>{
          return  prvitem.filter((item )=>{
                axios.post('/deletelist', {deleteitem:text},{
            headers: {
                'x-token' : thetoken
            }
        })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

            return item !== text;
          });
          });
  }

  
var today = new Date();
var options = {	day: "numeric",	month: "long", 	weekday: "long"}
var sDay = today.toLocaleDateString("en-US", options);



  return (

    <div className='mycontainer ' >
      
      <div className="maincontainer myshadow">
        <form >
      <h1  className='heading tracking-in-expand-fwd color' >{sDay}</h1>
      <div className="dflex">
        <div className='test'>
        <input type="text"  className='mytext' onChange={handlerevent} autoComplete='off' name="lists" value={list} placeholder='ADD A TASK' />
        </div>
        <div >
          <button onClick={submitevent} >< AddCircleTwoToneIcon style={{ fontSize: "53",color:"grey" }} /></button>
        </div>
       </div> 
               <div>
                  <ul className="list-group">
                    
                  {alllist.map((todoItem, index) => (
                    <Todoitem
                      key={index}
                      id={index}
                      text={todoItem}
                      removeitem={deleteitems}
                    />
                  ))}
                  </ul>
                  
        </div>
          </form>
        </div>

    </div>
  )
}

export default Home