const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://azharsayzz:Azhar70@easycoding.np4magm.mongodb.net/?retryWrites=true&w=majority&appName=easycoding").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})