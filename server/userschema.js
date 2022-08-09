const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userschema = new  mongoose.Schema({
    email:{
        type:"string",
        require:true
    },
    name:{
        type:"string",
        require:true
    } ,   
    password:{
        type:"string",
        require:true
    } ,   
    cpassword:{
        type:"string",
        require:true
    },
    lists: [{type: String}]
    
 
    
});

userschema.pre("save",async function(next){
    try{
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
        next();
    }catch(er){
        console.log(err);
    }
})


const User = new mongoose.model("USER",userschema);
module.exports=User;
