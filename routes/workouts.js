var express = require("express");
var router = express.Router();

const workoutCtrl = require("../controllers/workouts");

router.get("/", workoutCtrl.index);
router.get("/new", workoutCtrl.new);
router.get("/:id", workoutCtrl.show);
router.post("/", workoutCtrl.create);
router.delete("/:id", workoutCtrl.delete)

module.exports = router;
