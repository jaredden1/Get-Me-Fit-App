const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema(
  {
    activity: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      min: 0,
      required: true,
    },
    distance: {
      type: Number,
      min: 0,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cardio", cardioSchema);