const Product = require('../models/product.model');

module.exports.createProduct = (request, response) => {
    // Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Product.create(request.body) //This will use whatever the body of the client's request sends over
        .then(product => response.json(product))
        .catch(err => response.json(err));
};

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneProduct = (req, res) => {
    console.log(req.params);
    Product.findOne({_id: req.params.id})
        .then((oneProduct) => {
            res.json({product:oneProduct})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
