const Workout = require('../models/workout');

module.exports = {
  new: newWorkout,
  show,
  create,
  index
};

function newWorkout(req, res) {
  res.render('workouts/new', {title: 'New Workout', errorMsg: ''});
}

async function show(req, res) {
  try {
    const workout = await Workout.findById(req.params.id);
    const stats = await Stat.find({workout: workout._id});
    res.render('workouts/show', {title: 'Workout Details', workout, stats});

  } catch (err) {
    console.log(err);
  }
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Workout.create(req.body);
    res.redirect('/workouts');
  } catch (err) {
      console.log(err)
      res.render('/workout/new', {title: 'New Workout', errorMsg: err.message})
    }
    console.log('this is a request body', req.body)
  }


async function index(req, res) {
  try {
    const workouts = await Workout.find({});
    res.render('workouts/index', {title: 'Workout List', workouts: workouts});
  } catch (err) {
    res.send(err);
  }
}