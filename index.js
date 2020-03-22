const express=require('express');

const app=express();

const port=7000;

app.use('/',require('./routes/index'));


// app.get('/',(req,res)=>{
//     res.send('my site is working');


// })

app.listen(port,function(err){
    if(err){
        console.log(`error is running in the server:${err}`);

    }

    console.log(`server is running on the port no ${port}`);
});