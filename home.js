const express =require("express");
const homeSchema = require("../models/homeSchema");
const Router = express.Router();
const userSchema = require('../models/homeSchema');

Router.get('/',(err,res) => {
    res.render('register',{title:"Fill Form"})
})

Router.post('/register',async(req,res) =>{
    try{
       const name= req.body.name;
       const email= req.body.email;
       const number= req.body.number;
       const password= req.body.password;
        
    
        {
        const userData = new homeSchema({
            name,
            email,
            number,
            password
        })
        userData.save(err=>{
            if(err){
                console.log(err);
            }else{
                res.render("register",{title:"Done"})
            }
        })

        const useremail = await homeSchema.findOne({email:email});
        if(email === useremail.email){
            res.render('register', { title:'',password:'',email:'Email is already there' })
        }else{
            console.log('err');
        }
        }

    }catch(error){
        res.render('register',{title:'Fill something plz', password:'',email:''})
    }
})

//login

Router.post('/login', (req,res)=>{
    const{
        email,
        password
    } = req.body;

    homeSchema.findOne({email:email},(err,result)=>{
      if(email === result.email){
        res.render('mainpage')
      }else{
        console.log(err);
      }

    
  
    } )
})

module.exports =Router;