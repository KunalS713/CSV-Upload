const mongoose = require("mongoose");

// connecting to mombgoose

// mongoose.connect("mongodb://localhost:27017/csv_db");

mongoose.connect(
  "mongodb+srv://kunals713:csvup%40713@cluster0.1az2d.mongodb.net/csv-upload?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

// handling error if any
db.on("error", console.error.bind(console, "Error in Database connection"));

// on succesfull mongoose.connection
db.once("open", () => {
  console.log("Succesfully connected  to Database");
});
