const mongoose = require("mongoose");

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });

  console.log(
    `Connected to MongoDB at ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDb;
