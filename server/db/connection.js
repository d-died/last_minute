const mongoose = require('mongoose')
const db = mongoose.connection
require('dotenv').config()


mongoose.connect(mongoURI, { useNewUrlParser: true })

// Connection error/success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected at: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Open the Connection
db.on("open", () => {
  console.log(" mongo connection very nice!");
});

module.exports = mongoose