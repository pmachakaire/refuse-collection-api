const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Firstname is required"],
      trim: true,
      maxlength: [32, "Firstname cannot be more than 32 characters."],
    },
    lastName: {
      type: String,
      required: [true, "Lastname is required"],
      trim: true,
      maxlength: [32, "Lastname cannot be more than 32 characters."],
    },
    phoneNumber: {
      type: String,
      maxlength: [20, "Phone number cannot be longer than 20 characters"],
      required: true,
      trim: true,
      unique: true,
    },
    password: String,
    address: {
      houseNumber: {
        type: Number,
        max: [3, "House Number cannot be more than 3 characters"],
      },
      streetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Street",
        required: [true, "Street is required"],
      },
    },
    surburbId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Surburb",
      required: [true, "Surburb is required"],
    },
    salutation: {
      type: String,
      enum: ["Mr", "Miss", "Ms", "Mrs"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
