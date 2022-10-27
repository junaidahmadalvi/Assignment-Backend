const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email :{
        type : String,
        required:true,
        unique : [true , " Email already present"],
    },
    cell :{
        type : String,
        required:true,
    },
    Age :{
        type : Number, 
        required:true,
        
    }
})








// <============create collection============>
const User = new mongoose.model("user",userSchema);




module.exports= {User};