const mongoose = require("mongoose");

const surburbSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      maxlength: [64, "Surburb name cannot be more than 64 characters"],
    },
    townId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Town",
      required: [true, "Town in required"],
    },
  },
  { timestamps: true }
);

// code to check uniqueness of surburb in Town

module.exports = mongoose.model("Surburb", surburbSchema);
