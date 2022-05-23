const mongoose = require("mongoose");

const townSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      maxlength: [64, "Town name cannot be more than 64 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Town", townSchema);
