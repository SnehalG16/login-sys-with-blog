// require("dotenv").config()
// const jwt = require("jsonwebtoken")
// const express=require("express")

// var cookieParser = require('cookie-parser')
// var app = express()
// app.use(cookieParser())

// const isAuth=(req,res,next)=>{
//     const {varificationToken} = req.cookies;
//     // console.log("Cookies: ", req.cookies);

//     if(!varificationToken)
//     {
//         return res.status(403).json({message:"please login first"})
//     }
//     jwt.verify(varificationToken,process.env.PrivateKey,(err,decoded)=>{
//         if(err)
//         {
//             return res.status(400).json({message:"invalid token"})
//         }
//         console.log("Decoded" + decoded.user)
//         // req.user=decoded.userData
//         console.log("from user value of user"+ "    " + decoded.userData)
//         next()
//     })
// }
// module.exports= isAuth
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
const isAuth = (req, res, next) => {
    const {varificationToken}  = req.cookies;



    if (!varificationToken) {
        return res.status(400).json({ message: "Login again" });
    }

    jwt.verify(varificationToken, process.env.PrivateKey ,function(err, decoded) {
        console.log("decoded is",decoded.userId) // bar
        // if(err){
        //     return res.status(400).json({ message: err });
        //    }
        //    console.log("decoded"+"  "+decoded)
           req.user = decoded.userId;
        //    res.send("ok")
        // console.log("req.user",decoded.userId)
           next();
      });
    
    // jwt.verify(varificationToken, process.env.PrivateKey,(err, decoded) => {
    //    if(err){
    //     return res.status(400).json({ message: err });
    //    }
    //    console.log("decoded"+"  "+decoded)
    //    req.user = decoded.userId;
    //    next();
    // });
      
};

module.exports = isAuth;