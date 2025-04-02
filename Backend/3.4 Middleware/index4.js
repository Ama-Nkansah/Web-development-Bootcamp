import express from "express";
import bodyParser from 'body-parser';
import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended:true}));

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form submitted successfully!");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
