import express from "express";
const app= express();
const port =3000

//https request
 app.get('/',(req,res)=>{
 res.send('Hello world');
 });

 
app.listen(port,()=>{
  console.log(`server running on port ${port}.`);
});