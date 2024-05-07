const http=require('http');
const express=require('express');
require('dotenv').config({debig:true});

// ! Server

const app=express();

const server=http.createServer(app);  //we are using http to extend the functionality of express serevr,
// suppose if we are using socket.io in our app in future then we need to use http modules.

//start the server

const PORT=process.env.PORT||9080;
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});