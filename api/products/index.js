const express = require('express');
const {
  getProducts,
  getSingleProduct,
  saveProduct,
  updateProduct,
  deleteProduct
} = require('./product-controllers');

const router = express.Router();

router.get('/', getProducts);
router.post('/', saveProduct);
router.get('/:product_id', getSingleProduct);
router.put('/:product_id', updateProduct);
router.delete('/:product_id', deleteProduct);

module.exports = router;
