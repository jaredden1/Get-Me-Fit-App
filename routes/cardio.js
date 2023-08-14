const express = require("express");
const router = express.Router();
const cardioCtrl = require("../controllers/cardio");

router.get("/cardio/new", cardioCtrl.new);
router.post("/cardio", cardioCtrl.create);
router.get("/cardio", cardioCtrl.index); 

module.exports = router;
