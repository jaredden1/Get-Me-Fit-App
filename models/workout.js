const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new mongoose.Schema(
  {
    workType: {
      type: String,
      enum: ["chest", "core", "legs", "shoulders", "arms", "back", "full body"],
      required: true,
    },
    workNote: {
      type: "string",
    },
    workDate: {
      type: Date,
      default: function () {
        const currDate = new Date();
        const newDate = currDate.setFullYear(currDate.getFullYear());
        return newDate;
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);
