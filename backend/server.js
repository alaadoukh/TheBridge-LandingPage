const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/courses", require("./courses.js"));

app.get("/", (req, res) => {
  res.redirect("/api/courses");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
