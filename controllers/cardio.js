const Cardio = require("../models/cardio");

module.exports = {
  new: newCardio,
  create,
  index,
  show,
};

function newCardio(req, res) {
  res.render("cardio/new", { title: "Add Cardio" });
}

async function create(req, res) {
  try {
    const newCardio = { ...req.body };
    await Cardio.create(newCardio);
    res.redirect("/cardio");
  } catch (err) {
    console.log(err);
    res.render("cardio/new", { title: "Add Cardio", errorMsg: err.message });
  }
}

async function index(req, res) {
  try {
    const cardioList = await Cardio.find({});
    res.render("cardio/index", { title: "Cardio List", cardioList });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}

async function show(req, res) {
    try {
      const cardio = await Cardio.findById(req.params.id);
      res.render("cardio/show", { title: "Cardio Detail", cardio });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  }
  
