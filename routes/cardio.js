const express = require("express");
const router = express.Router();
const cardioCtrl = require("../controllers/cardio");

router.get("/cardio", cardioCtrl.index); 
router.get("/cardio/new", cardioCtrl.new);
router.get("cardio/:id", cardioCtrl.show);
router.get("/cardio/:id/edit", cardioCtrl.edit);

router.post("/cardio", cardioCtrl.create);

router.delete("/cardio/:id", cardioCtrl.delete)

router.put("/cardio/:id", cardioCtrl.update)

module.exports = router;