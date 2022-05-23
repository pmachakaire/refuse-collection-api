const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    collectionDate: {
      type: Date,
      required: [true, "Date is required"],
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Company is required"],
    },
    pricePerBin: {
      type: Number,
      required: true,
    },
    currency: { type: String, enum: ["ZWL", "USD"] },
    paymentMethods: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
