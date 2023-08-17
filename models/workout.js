const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema(
  {
    workType: {
      type: String,
      enum: ["Chest", "Core", "Legs", "Shoulders", "Arms", "Back", "Body Weight"],
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
    workId: {
      type: Number,
      default: Math.floor(Math.random() * 1000000),
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);