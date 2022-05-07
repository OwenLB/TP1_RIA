const {
	getEvolution,
} = require("../services/evolution.service");

const getEvolutionController = async (req, res, next) => {
	const getEvolutionService = await getEvolution({nom: req.params.nom});
	return res.json(getEvolutionService);
};

module.exports = {
	getEvolutionController,
};