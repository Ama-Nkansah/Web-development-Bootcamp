import express from "express";
const app= express();
const port =3000

//https request
 app.get('/',(req,res)=>{
 res.send('Hello world');
 });

 //differnt endpoints 
 app.get('/about',(req,res)=>{
  res.send('differnt path');
  });

  app.get('/contact',(req,res)=>{
    res.send('differnt endpoints ');
    });
   

app.listen(port,()=>{
  console.log(`server running on port ${port}.`);
});