const Workout = require("../models/workout");
const Stat = require("../models/stat");

module.exports = {
  newChest,
  newCore,
  newLegs,
  newShoulders,
  newArms,
  newBack,
  newFull,
  create,
};

function newChest(req, res, next) {
  const workoutId = req.params.id;
  res.render("stats/new_chest", {
    title: "Add Stat",
    workoutId,
  });
}

function newCore(req, res, next) {
  const workoutId = req.params.id;
  res.render("stats/new_core", {
    title: "Add Stat",
    workoutId,
  });
}

function newLegs(req, res, next) {
  const workoutId = req.params.id;
  res.render("stats/new_legs", {
    title: "Add Stat",
    workoutId,
  });
}

function newShoulders(req, res, next) {
  const workoutId = req.params.id;
  res.render("stats/new_shoulders", {
    title: "Add Stat",
    workoutId,
  });
}

function newArms(req, res, next) {
  const workoutId = req.params.id;
  res.render("stats/new_arms", {
    title: "Add Stat",
    workoutId,
  });
}

function newBack(req, res, next) {
  const workoutId = req.params.id;
  res.render("stats/new_back", {
    title: "Add Stat",
    workoutId,
  });
}

function newFull(req, res, next) {
  const workoutId = req.params.id;
  res.render("stats/new_full", {
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
        entryId: req.body.entryId,
        workout: req.params.id
      };
      await Stat.create(newStat);
      res.redirect(`/workouts/${req.params.id}`);
    } catch (err) {
      console.log(err);
      next(Error(err));
    }
  }

