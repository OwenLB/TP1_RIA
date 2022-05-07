const Product = require('../models/Product')
const Evolution = require('../models/Evolution')

const getEvolution = async (data) => {
    const { nom } = data
	const product = await Product.findOne({ nom: nom });

    // check if email exist
	if (!product.success) {
		let e = new Error("Product n'existe pas");
		e.status = 404;
		throw e;
	}

    const evolution = await Evolution.findAllByName({ id_produit: product.data.id_produit });

    // check if email exist
	if (!evolution.success) {
		let e = new Error("Evolution du produit n'existe pas");
		e.status = 404;
		throw e;
	}

    return (data = evolution)
};

module.exports = {
	getEvolution,
};