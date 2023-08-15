const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statSchema = new Schema(
    {
      type: {
        type: String,
        required: true,
      },
      weight: {
        type: Number,
        min: 0,
        required: false,
      },
      reps: {
        type: Number,
        min: 0,
        required: true,
      },
      notes: {
        type: String,
        required: false,
    },
      entryId: {
        type: String,
      },
      workout: {
        type: Schema.Types.ObjectId,
        ref: "Workout",
    },
    },
    {
      timestamps: true,
    }
  );
  

module.exports = mongoose.model("Stat", statSchema);
