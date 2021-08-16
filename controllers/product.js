const Product = require('../models/product');
// name
exports.postAddProduct = (req, res, next) => {
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const categories = req.body.categories;
  Product.create({
    name: name,
    price: price,
    imageUrl: imageUrl,
    description: description,
    categories: categories
  })
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedName = req.body.name;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedcategories = req.body.categories;
  Product.findById(prodId)
    .then(product => {
      product.name = updatedName;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      product.categories = updatedcategories;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.findAll({
  limit,
  offset,
  }).then(products => {
      res.render('admin/products', {
        prods: products,
        pageName: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return product.destroy();
    })
    .then(result => {
      console.log('DESTROYED PRODUCT');
    })
    .catch(err => console.log(err));
};
