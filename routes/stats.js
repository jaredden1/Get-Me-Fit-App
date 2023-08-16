const express = require("express");
const router = express.Router();
const statCtrl = require("../controllers/stats");

router.get("/workouts/:id/stats/new_chest", statCtrl.newChest);
router.get("/workouts/:id/stats/new_core", statCtrl.newCore);
router.get("/workouts/:id/stats/new_legs", statCtrl.newLegs);
router.get("/workouts/:id/stats/new_shoulders", statCtrl.newShoulders);
router.get("/workouts/:id/stats/new_arms", statCtrl.newArms);
router.get("/workouts/:id/stats/new_back", statCtrl.newBack);
router.get("/workouts/:id/stats/new_full", statCtrl.newFull);

router.post("/workouts/:id", statCtrl.create);

module.exports = router;
