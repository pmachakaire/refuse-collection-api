const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    numberOfBins: { type: Number, default: 0 },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User in required"],
    },
    scheduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule",
      required: [true, "Schedule in required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Collection", collectionSchema);
