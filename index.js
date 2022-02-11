const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const expressLayout = require("express-ejs-layouts");
const db = require("./config/mongoose");
// setup middlewares

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(expressLayout);
app.use(express.static("./assets"));

app.set("layout  extractStyles", true);
app.set("layout  extractScripts", true);

app.use("/", require("./routes"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
  if (err) console.log("An error in starting the Server");
  console.log("Server is running on Port : ", port);
});
