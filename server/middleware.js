const jwt = require("jsonwebtoken");
 const middleware = async (req,res,next)=>{
    
   try{
        let utoken = req.header('x-token');
        if(!utoken){
            return res.status(400).json('Token Not found');
        }
        let decode = jwt.verify(utoken,process.env.JWTPASS);
        req.user = decode.user;
        next();

       

   }catch(err){
       console.log(err);
   }
}
module.exports=middleware;