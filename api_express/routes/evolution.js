const {
	getEvolutionController,
} = require("../controllers/evolution.controller");

const router = require("express").Router();

router.get("/:nom", getEvolutionController);

module.exports = router;