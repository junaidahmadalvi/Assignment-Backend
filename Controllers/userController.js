
const {User} = require("../Schemas/userSchema")

var ObjectId= require("mongodb").ObjectId;

// const env = require("dotenv").config();
const connection =require("../dbConnection");
const emailvalidator = require("email-validator");

module.exports = {
    getUser: async(req,res)=>{
        try{
           let getresult=  connection(); 
              getresult= await User.find()
            // console.log(getresult);
           res.send(getresult)
        }catch(e)
        {
            console.log(e);
            res.status(400).send({  "message": "Server Error", "Error": e }) 
        }
    },
  
    // getAllUser: async(req,res)=>{
    //     try{
    //        let getresult=  connection(); 
    //           getresult= await User.find()
    //         // console.log(getresult);
    //        res.send(getresult)
    //     }catch(e){console.log(e);}
    // },


    
    getUserById:  async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            const getIndividualResult = await User.findById(_id)
            // console.log(getIndividualResult,"user")
            res.status(201).send(getIndividualResult)
        }catch(e){res.send(e);}
    },




    addUser: async (req, res) => {
        try {

            const { name, email, cell, age} = req.body
            let user=  connection(); 
              user = await User.findOne({ email: email })
             if (user) 
             {
                 res.send({ "status": "failed", "message": "Email already exists" })
                 console.log("Email already exists");
             } 
             else 
                    {
                        if (name && email && cell && age) 
                        {
                            // if (pswd === pswd_confirmation) {
                            

                                if(emailvalidator.validate(req.body.email))
                                {
                                    
                                    const newUser = new User({
                                    name: name,
                                    email: email,
                                    cell: cell,
                                    age: age,
                                    })
                                    await newUser.save()
                                     console.log("User Added");
                                     res.send({ "status": "success", "message": "Registered Successfully", })    
                                }
                                else{
                                     res.status(400).send({ "status": "failed", "message": "Invalid Email" });
                                     console.log("Invalid Email");

                                     }
                               

                        }
                         else{
                                res.send({ "status": "failed", "message": "All fields are required" })
                                 console.log("All fields are required");


                            }
                               
                    }       
        } catch (e) {
            console.log(e);
            res.status(400).send({  "message": "Server Error", "Error": e }) 


        }
    },

    

    updateUser: async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            let updateResult = connection();
            updateResult = await User.findByIdAndUpdate(_id , req.body,{
                new : true
            })
            res.status(201).send(updateResult)
    
        }catch(e){res.status(404).send(e);}
    },




    

    deleteUser:  async(req,res)=>{
        try{
            const _id = req.params.id;
            let deletedResult = connection();
            deletedResult = await User.findByIdAndDelete(_id)
            res.status(201).send(deletedResult)
    
        }catch(e){res.status(404).send(e);}
    },



  };
  


