const express=require('express');



const app=express();

const port=7000;

const db=require('./config/mongoose');


app.use(express.urlencoded());

app.use('/',require('./routes/index'));

app.set('view engine','ejs');


// app.get('/',(req,res)=>{
//     res.send('my site is working');


// })

app.set('views','./views');

app.use(express.static('assets'));

app.listen(port,function(err){
    if(err){
        console.log(`error is running in the server:${err}`);

    }

    console.log(`server is running on the port no ${port}`);
});