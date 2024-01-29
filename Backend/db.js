const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/TODO?directConnection=true";
// const uri = "mongodb+srv://trendhub:admin@todo.bzgw1rz.mongodb.net/"
async function main(){
    await mongoose.connect(uri);
    console.log("connected successfully")
}

module.exports = main;