const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect("mongodb+srv://deborasmuzzi:Asdf2030@cpewebdev.agdwbog.mongodb.net/?retryWrites=true&w=majority&appName=cpeWebDev")}

module.exports = startDB;

