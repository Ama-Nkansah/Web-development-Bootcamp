import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

// result is the Axios response object from the API call
// It includes properties like:
// - result.data: The actual data returned by the API (e.g., JSON content)
// - result.status: The HTTP status code (e.g., 200 for success)
// - result.headers: The response headers from the server


app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
