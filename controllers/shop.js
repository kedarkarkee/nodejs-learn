const Product = require('../models/product');



module.exports.getProducts = (req, res, next) => {
    Product.fetchAll(productsdata => {
        res.render('shop/product-list', {
            prods: productsdata, pageTitle: 'Shop', path: '/products'
        });
    });
}
module.exports.getIndex = (req, res, next) => {
    Product.fetchAll(productsdata => {
        res.render('shop/index', {
            prods: productsdata, pageTitle: 'Shop', path: '/shop'
        });
    });
}
module.exports.getCart = (req,res,next) => {
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}
module.exports.getOrders = (req,res,next) => {
    res.render('shop/orders',{
        path: '/orders',
        pageTitle: 'Your Orders'
    })
}
module.exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout',{
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}