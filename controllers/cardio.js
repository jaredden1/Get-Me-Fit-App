const Cardio = require("../models/cardio");

module.exports = {
  new: newCardio,
  create,
  index,
  show,
  delete: deleteCardio,
  edit: editCardio,
  update
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
  
async function deleteCardio(req, res) {
  try {
    await Cardio.deleteOne(Cardio.findById(req.params.id));
    res.redirect("/cardio");
  } catch (err) {
    console.log(err)
    res.render("/cardio", { title: "New Cardio", errorMsg: err.message });
  }

}
  
async function editCardio(req, res) {
  try {
    const cardio = await Cardio.findById(req.params.id)
    const editedCardio = await Cardio.findById(req.params.id);
    res.render("cardio/edit", { title: "Edit Cardio", editedCardio})
  } catch (err) {
    console.log(err)
    const cardio = await Cardio.find({});
    res.render("cardio/index", { title: "New Cardio" });
  }
}


async function update(req, res) {
  try {
    const cardioData = { ...req.body }
    console.log(cardioData)
    const cardio = await Cardio.find({});
    console.log(cardio._id)
    const editedCardio = await Cardio.findById(req.params.id)
    editedCardio.activity = cardioData.activity
    editedCardio.duration = cardioData.duration
    editedCardio.distance = cardioData.distance
    await editedCardio.save()

    res.redirect("/cardio")
    
  } catch (err) {
    console.log(err)
  }

}