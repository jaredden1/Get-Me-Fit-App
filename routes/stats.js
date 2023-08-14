const express = require("express");
const router = express.Router();
const statCtrl = require("../controllers/stats");

router.get("/workouts/:id/stats/new", statCtrl.new);

router.post("/workouts/:id", statCtrl.create);

module.exports = router;
