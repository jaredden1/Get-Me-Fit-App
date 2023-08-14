const Workout = require("../models/workout");
const Stat = require("../models/stat");

module.exports = {
  new: newStat,
  create,
};

function newStat(req, res, next) {
  const workoutId = req.params.id;
  res.render("stats/new", {
    title: "Add Stat",
    workoutId,
  });
}

async function create(req, res, next) {
    try {
      const newStat = {
        type: req.body.type,
        weight: req.body.weight,
        reps: req.body.reps,
        notes: req.body.notes,
        workout: req.params.id,
      };
      await Stat.create(newStat);
      res.redirect(`/workouts/${req.params.id}`);
    } catch (err) {
      console.log(err);
      next(Error(err));
    }
  }

