// import mongoose from 'mongoose'
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kaushikkundu774:Invincible1@cluster0.ycpwm0e.mongodb.net/')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    firstname:String,
    lastname:String

})
const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})
const Account = mongoose.model('Account',accountSchema);
const User = mongoose.model('User',userSchema);
module.exports = {
    User,
    Account
}