const Product = require('../models/Product')
const Evolution = require('../models/Evolution')

const getProduct = async (data) => {
    const { id_produit } = data
	const product = await Product.findOne({ id_produit: id_produit });
    // check if email exist
	if (!product.success) {
		let e = new Error("Product n'existe pas");
		e.status = 404;
		throw e;
	}

    return (data = {
        id_produit: product.data.id_produit,
        nom: product.data.nom,
        date_in: product.data.date_in,
        date_up: product.data.date_up,
        description: product.data.description,
        prix: product.data.prix,
    })
};

const getAllProducts = async () => {
    
	const products = await Product.getAll();

    // check if products exist
	if (!products.success) {
		let e = new Error("Pas de produits");
		e.status = 404;
		throw e;
	}

    return (data = products.data)
};

const addProduct = async (data) => {
	const product = await Product.add({
        nom : data.nom,
        description: data.description,
        prix: data.prix,
    });

    // check if products exist
	if (!product.success) {
		let e = new Error("Erreur ajout produit");
		e.status = 404;
		throw e;
	}

    return (data = {
        success : product.success
    })
};

const deleteProduct = async (data) => {
    console.log(data);
    const product = data.id_produit ? (
        await Product.deleteFromId({
            id_produit : data.id_produit
        })
    ) : (
        await Product.deleteFromNom({
            nom : data.nom
        })
    );

    // check if products exist
	if (!product.success) {
		let e = new Error("Erreur Suppression produit");
		e.status = 404;
		throw e;
	}

    return (data = {
        success : product.success
    })
};

const updateProduct = async (data) => {
    const product = await Product.findOne({ id_produit : data.id_produit })
    // check if Product exist
    if (!product.success) {
        let e = new Error("Le produit n'existe pas");
        e.status = 404;
        throw e;
    }

    const resUpdate = await Product.update({ nom : data.nom, description : data.description, prix : data.prix, id_produit : data.id_produit })
    // check if products updated
	if (!resUpdate.success) {
		let e = new Error("Erreur Mise a jour du produit");
		e.status = 404;
		throw e;
	}

    const evolution = await Evolution.add({id_produit : product.data.id_produit, prix : data.prix})
    // check if evolution added
	if (!evolution.success) {
		let e = new Error("Erreur Ajout Evolution");
		e.status = 404;
		throw e;
	}

    return (data = {
        success : evolution.success
    })
};

module.exports = {
	getProduct,
    getAllProducts,
    addProduct,
    deleteProduct,
    updateProduct,
};