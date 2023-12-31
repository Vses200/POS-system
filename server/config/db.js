const mongoose = require("mongoose");
// const MONGO_URI =
//   'mongodb+srv://vi123:BQH3rijyjtXEPq9T@cluster0.cb3mx.mongodb.net/proshop?retryWrites=true&w=majority'

const MONGO_URI = "mongodb+srv://vses200:20july4T@cluster0.wovfdje.mongodb.net/";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // ? .red.underline.bold , .cyan.underline are from colors package
    process.exit(1);
  }
};

module.exports = connectDB;
