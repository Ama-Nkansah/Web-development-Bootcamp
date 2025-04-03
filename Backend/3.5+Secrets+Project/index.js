//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let user = false;
const userpass = "ILoveProgramming";

app.use(bodyParser.urlencoded({extended:true}));

function password(req, res, next) {
  if (req.body.password === userpass){
    user = true;
  }
   next();
    };
    
    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/public/index.html"); // Serve login page
    });

    app.post("/submit", password, (req, res) => {
      if (user) {
        res.sendFile(__dirname + "/public/secret.html"); // Serve secret page if password is correct
      } else {
        res.redirect("/"); // Redirect to login page if user is not authenticated
      }
    });
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
