const express = require("express")
const app = express()
const port = 3000
  
app.get('/ama', (req,res)=>{
  res.status(299)
  res.send("Hello World!")
})

app.listen(port,()=>{
  console.log(`App is listening on port ${port}`)
})