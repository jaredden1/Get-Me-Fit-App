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
    const user = req.user
    const workout = await Workout.findById(req.params.id);
    const stats = await Stat.find({ workout: workout._id });
    res.render("workouts/show", { title: "Workout Detail", workout, stats, user });
  } catch (err) {
    console.log(err);
  }
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  try {
    console.log(req.body)
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
    const workout = await Workout.findById(req.params.id)
    const editedWorkout = await Stat.findById(req.params.id);
    res.render("workouts/edit", { title: "Edit Workout", editedWorkout})
  } catch (err) {
    console.log(err)
    const workouts = await Workout.find({});
    res.render("workouts/index", { title: "New Workout", editedWorkout});
  }
}

async function update(req, res) {
  try {
    const workoutData = { ...req.body }
    console.log(workoutData)
    const workouts = await Workout.find({});
    console.log(workouts)
    const editedWorkout = await Stat.findById(req.params.id)
    editedWorkout.type = workoutData.type
    editedWorkout.weight = workoutData.weight
    editedWorkout.reps = workoutData.reps
    editedWorkout.notes = workoutData.notes
    editedWorkout.entryId = workoutData.entryId
    await editedWorkout.save()

    res.redirect(`/workouts/${workoutData.entryId}`)
    
  } catch (err) {
    console.log(err)
  }
}