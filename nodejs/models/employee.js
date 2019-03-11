var crypto = require('crypto');
const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name: { type:String, required: true },
    salary: { type:Number },
    email: {type: String, unique: true, required: true},
    hash: String,
    salt: String,
});


module.exports = { Employee };
