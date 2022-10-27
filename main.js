
const express = require('express');
// const connection =require("./dbConnection");
const app = express();
const cors = require("cors");
const {User} = require("./Schemas/userSchema")
const connection =require("./dbConnection");
const env = require("dotenv").config();

//---------------Controllers-----------------------

const userController = require("./Controllers/userController");


   
require("./dbConnection");


const port= process.env.PORT ;

app.listen(port,()=>console.log(`Request is listening on ${port}` ))



//----------------------------------------------------------------------------

//              User CRUD
//----------------------------------------------------------------------------


app.use(cors());




//-----------Insert Data----------------------

app.use(express.json())
app.post('/addUser'  , userController.addUser)



//-----------Read/Get Data----------------------


app.get('/allUsers',  userController.getUser );

app.get('/singalUser/:id', userController.getUserById)



//-----------Update Data----------------------

app.put('/user/update/:id', userController.updateUser)



//----------Delete Records -----------------------

app.delete('/user/delete/:id', userController.deleteUser)








//====================================================================================

//----------< Authentification> and <Authorization>-------------------------

//     admin     632b3061c48a747227b4a41a


// user     632876fa137b95b9ac2df768

//  app.get('/allUsers/:id', async(req,res,next)=>{
//      try{
//          const id=req.params.id;

//              let getresult=  connection(); 
//             getresult= await User.findOne({
             
//               _id: ObjectId(id),
             
//            })
//         //  console.log(getresult);

//            if (getresult==null) {
//              res.send("User Not Authenticated")
//              console.log("User Not Authenticated");

//            } else {

//              // res.send("User Authenticatted")
//              console.log("User Authenticated");
//              next()
//            }
//      }catch(e){console.log(e);}

    
//  },
// // //-------- <Authorization>-------------------
//  async(req,res,next)=>{
//      try{
//         const id=req.params.id;

//         // const role=req.params.role;
 
//             //  let getresult=  connection(); 
//             const getresult= await User.findOne({
               
//               _id: ObjectId(id),
//                 //  role:"admin"
             
//            })
//         //  console.log(getresult);




//            if (getresult==null) {
//              res.send("User not Authoriazed")
//              console.log("User Not Authoriazed");

//            }
//            else if (getresult.role==="admin") {
//             console.log("User Authoriazed");
//             next()

//           }
           
//            else {

//              // res.send("User Authenticatted")
//              res.send("User not Authoriazed")
//              console.log("User Not Authoriazed");
//            }
//      }catch(e){console.log(e);}

    
//  }, userController.getUser );












