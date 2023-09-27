const ProductController = require('../controllers/product.controller');  
module.exports = (app) => {
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/allProducts', ProductController.findAllProducts);
    app.get('/api/oneProduct/:id', ProductController.findOneProduct);
    app.put('/api/updateProduct/:id', ProductController.updateProduct);
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct);
}

