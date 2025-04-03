import express from "express";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


const today= new Date();
const day = today.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday",'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 let message;
 let answered_day;

if (day>=1 && day<=4){
  answered_day = "weekday";
 message =`${answered_day} , lets get some work done`;
}
else{
   answered_day = "weekend";
message = `${answered_day} , it's time to have fun`;
}

app.get('/', (req, res) => {
  res.render('index', { outcome: message }); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});