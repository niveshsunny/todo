const express = require("express");
const mongoose = require("mongoose");
const User = require("./userschema");
const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
// const middleware = require("./middleware");


app.use(express.json());


mongoose.connect(process.env.DB,{
      useNewUrlParser:true,   
    useUnifiedTopology:true  
}).then(()=>{
    console.log("Connection Successfull");
}).catch((err)=>{
    console.log(err);
})



app.get("/home",(req,res)=>{
     res.status(200).json({message:"Login"});
});

app.post("/register",async(req,res)=>{
   
    try{

    const{ email, name , password , cpassword} = req.body;
    if(!email || !name || !password || !cpassword){
      return  res.status(404).json({message:"Fill all the details"})
    }
     const checkuser = await User.findOne({email:email});
     if (checkuser){
          res.status(404).json({message:"User already exist"});
     }else if(password != cpassword){
         return res.status(404).json({message:"Confirm Password Doesnot match with Password "});
     }else{
        
         const newuser = User({
             email,name,password,cpassword
         });
        await newuser.save();
         return res.status(201).json({message:"User Registered Successfully"});       
     }

    }catch(err){
        console.log(err,"Error");
    }
    
});

app.post("/login",async(req,res)=>{
    let token;
 try{
     const{email, password } = req.body;
     const usercheck =await User.findOne({email:email});
    if(!usercheck){
         return res.status(400).send("Invalid credentials");              
    }

    if(usercheck){
        const match = await bcrypt.compare(password,usercheck.password);
          if(!match){
               return res.status(422).send('Invalid credentials');
           
          }          
        }   

            //   let payload={
            //     user:{
            //        id: usercheck._id
            //     }
            //   }
            // jwt.sign(payload,process.env.JWTPASS,{expiresIn:36000000},(err,token)=>{
            //   if(err) throw err;
            //   return res.json({token}) 
            // })

 }catch(err){
     console.log(err,"error");
 }

});

app.post("/postlist", async(req,res)=>{

 try{
     
     const items  = req.body.list;
    let user =  await User.findOneAndUpdate({_id:process.env.ID},{
          $push:{lists:items}
      });
     res.json(user.lists);
    
 }catch(err){
     console.log(err,"err");
     return res.status(500).send('Server Error to add post');
 }

});
app.post("/deletelist", async(req,res)=>{

 try{
     
     const ditem  = req.body.deleteitem;
    let user =  await User.findOneAndUpdate({_id:process.env.ID},{
          $pull:{lists:ditem}
      });
     res.json(user.lists);

    
 }catch(err){
     console.log(err,"err");
     return res.status(500).send('Server Error to add post');
 }

});
app.get("/todo", async(req,res)=>{
    try{
        let user = await User.findById(process.env.ID)
        if(!user){
            return res.status(400).send('User not found');
        }
        res.json(user.lists);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error');
    }
});




app.listen("5000",()=>{
    console.log("succesffuly started on port 5000");
})