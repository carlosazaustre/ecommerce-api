const Product = require('./product-model');

function getProducts (req, res, next) {
  Product.find({}, (products) => {
    res.status(200).send({ products });
  });
}

function getSingleProduct (req, res, next) {
  Product.findById(req.params.product_id, (err, product) => {
    if (err) return res.status(500).send({ message: `Error ${err.code}: ${err.message}`});
    if (!product) return res.status(404).send({ message: `No existe el producto ${req.params.product_id}` });

    res.status(200).send({ product });
  })
}

function saveProduct (req, res, next) {
  const { name, description, image, price, availability, deliveryStimate, category } = req.body;
  const product = new Product({
    name,
    description,
    image,
    price,
    availability,
    deliveryStimate,
    category
  });

  product.save((err, productSaved) => {
    if (err) return res.status(500).send({ message: `Error ${err.code}: ${err.message}`});

    res.status(200).send({
      message: 'Producto salvado',
      product: productSaved
    });
  });
}

function updateProduct (req, res, next) {
  Product.findByIdAndUpdate(req.params.product_id, { $set: req.body }, (err, productUpdate) => {
    if (err) return res.status(500).send({ message: `Error ${err.code}: ${err.message}`});
    if (!product) return res.status(404).send({ message: `No existe el producto ${req.params.product_id}` });

    res.status(200).send({
      message: 'Producto actualizado',
      product: productUpdated
    });
  });
}

function deleteProduct (req, res, next) {
  Product.findByIdAndRemove(req.params.product_id, {}, (err, product) => {
    if (err) return res.status(500).send({ message: `Error ${err.code}: ${err.message}`});
    if (!product) return res.status(404).send({ message: `No existe el producto ${req.params.product_id}` });

    res.status(200).send({ message: 'Producto Eliminado' });
  });
}

module.exports = {
  getProducts,
  getSingleProduct,
  saveProduct,
  updateProduct,
  deleteProduct
};
