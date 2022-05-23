const mongoose = require("mongoose");

const streetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      maxlength: [64, "Street name cannot be more than 64 characters"],
    },
    surburbId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Surburb",
      required: [true, "Surburb in required"],
    },
    townId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Town",
      required: [true, "Town in required"],
    },
  },
  { timestamps: true }
);

// code to check uniquenes of street in surburb

module.exports = mongoose.model("Street", streetSchema);
