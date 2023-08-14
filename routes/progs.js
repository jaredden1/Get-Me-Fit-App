const express = require("express");
const router = express.Router();

const progCtrl = require("../controllers/progs");

router.post("/workouts/:id/progs", progCtrl.create);

module.exports = router;
