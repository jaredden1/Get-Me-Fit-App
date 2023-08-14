const Workout = require("../models/workout");
const Stat = require("../models/stat");

module.exports = {
  new: newWorkout,
  show,
  index,
  create,
  delete: deleteWorkout,
  edit: editWorkout,
  update
};

function newWorkout(req, res) {
  res.render("workouts/new", { title: "New Workout", errorMsg: "" });
}

async function show(req, res) {
  try {
    const workout = await Workout.findById(req.params.id);
    const stats = await Stat.find({ workout: workout._id });
    res.render("workouts/show", { title: "Workout Detail", workout, stats });
  } catch (err) {
    console.log(err);
  }
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    await Workout.create(req.body);
    res.redirect("/workouts");
  } catch (err) {
    console.log(err);
    res.render("/workout/new", { title: "New Workout", errorMsg: err.message });
  }
  console.log("This is the request body: ", req.body);
}

async function index(req, res) {
  try {
    const workouts = await Workout.find({});
    res.render("workouts/index", { title: "Workout List", workouts: workouts });
  } catch (err) {
    res.send(err);
  }
}

async function deleteWorkout(req, res) {
  try {
    await Workout.deleteOne(Workout.findById(req.params.id));
    res.redirect("/workouts");
  } catch (err) {
    console.log(err)
    res.render("/workouts", { title: "New Workout", errorMsg: err.message });
  }
}

async function editWorkout(req, res) {
  try {
    await Workout.updateOne(Workout.findById(req.params.id));
    res.render("workouts/edit", { title: "Edit Workout"})
  } catch (err) {
    console.log(err)
    const workouts = await Workout.find({});
    res.render("workouts/index", { title: "New Workout", errMsg: err.message, workouts: workouts});
  }
}

async function update(req, res) {
  try {
    const workoutData = { ...req.body }

    const editedWorkout = await Workout.findById(req.params.id)
    editedWorkout.type = workoutData.type
    editedWorkout.weight = workoutData.weight
    editedWorkout.reps = workoutData.reps
    editedWorkout.notes = workoutData.notes
    await editedWorkout.save()

    res.redirect(`/workouts/${req.params.id}`)
    
  } catch (err) {
    console.log(err)
  }
}