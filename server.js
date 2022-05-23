const express = require("express");
const morgan = require("morgan");
require("colors");
const connectDb = require("./config/db");

// Load env vars
require("dotenv").config({ path: "./config/config.env" });
const { PORT = 5000, NODE_ENV } = process.env;

// Connect to database
connectDb();

// add route files
const users = require("./routes/users");

// create the app
const app = express();

// Dev logging middleware
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// mount routers
app.use("/api/v1/users", users);

// configure listener
const server = app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}.`.yellow.bold)
);

// handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // close the server
  server.close(() => process.exit(1));
});
