const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      maxlength: [64, "Surburb name cannot be more than 64 characters"],
    },
    address: {
      number: { type: Number, min: 1 },
      street: {
        type: String,
        uppercase: true,
        maxlength: 64,
        minlength: 3,
        required: [true, "Street is required"],
      },
      surburbId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Surburb",
        required: [true, "Surburb is required"],
      },
      townId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Town",
        required: [true, "Town is required"],
      },
    },
    phoneNumber: {
      type: String,
      maxlength: [20, "Phone number cannot be longer than 20 characters"],
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// code to check uniqueness of surburb in Town

module.exports = mongoose.model("Company", companySchema);
