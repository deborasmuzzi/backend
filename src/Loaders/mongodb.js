const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect("mongodb+srv://deboramuzzi:Asdf2030@databackend.1anr8ta.mongodb.net/?retryWrites=true&w=majority&appName=databackend")}

module.exports = startDB;

