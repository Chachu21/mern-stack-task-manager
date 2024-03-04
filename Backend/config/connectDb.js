require("dotenv").config();
const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb is connected:`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = connectDb;
