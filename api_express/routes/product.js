const {
	getProductController,
	getProductsController,
	addProductController,
	deleteProductController,
	updateProductController,
} = require("../controllers/product.controller");

const router = require("express").Router();

router.get("/:id_produit", getProductController);
router.route("/")
	.get(getProductsController)
	.put(addProductController)
	.delete(deleteProductController)
	.post(updateProductController);

module.exports = router;