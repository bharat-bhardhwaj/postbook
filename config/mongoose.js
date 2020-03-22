const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/postbook');


const db=mongoose.connection;


db.on('error',console.error.bind(console,"error in connection to mongodb"));


db.once('open',function(){
    console.log('connected to database:: mongodb');
});


module.exports=db;