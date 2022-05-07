const {
	getProduct,
	getAllProducts,
	addProduct,
	deleteProduct,
	updateProduct,
} = require("../services/product.service");

const getProductsController = async (req, res, next) => {
	const getProductsService = await getAllProducts();
	return res.json(getProductsService);
};

const getProductController = async (req, res, next) => {
	const getProductService = await getProduct({id_produit : req.params.id_produit});
	return res.json(getProductService);
};

const addProductController = async (req, res, next) => {
	console.log(req.body);
	const addProductService = await addProduct(req.body.data);
	return res.json(addProductService);
};

const deleteProductController = async (req, res, next) => {
	const deleteProductService = await deleteProduct(req.body);
	return res.json(deleteProductService);
};

const updateProductController = async (req, res, next) => {
	const updateProductService = await updateProduct(req.body.data);
	return res.json(updateProductService);
};

module.exports = {
	getProductController,
	getProductsController,
	addProductController,
	deleteProductController,
	updateProductController,
};