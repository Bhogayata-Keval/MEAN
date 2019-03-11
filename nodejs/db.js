const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hexatech',{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log('MongoDB connection established.');
    }else{
        console.log('Error in Connection: '+JSON.stringify(err,undefined,2));
    }
});

module.exports=mongoose;