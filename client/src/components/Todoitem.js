import React from 'react';
import "./homestyle.css";

function Todoitem(props) {
  return (
      <div>

   <li className="list-group-item liststyle " style={{fontWeight:"500"}}>
    <input  onClick={() => {
        props.removeitem(props.text);
      }} className="form-check-input me-1 changebox" type="checkbox" value="" aria-label="..."/>
   {props.text}
  </li>     
   
    </div>
  );
}



export default Todoitem




