const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect("mongodb+srv://azaan:azaan@cluster0.deanbuu.mongodb.net/todo");
    console.log("Database is connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

module.exports = connectDatabase;
