const product = require("../models/product.model");

module.exports.CreateProduct = (req,res) =>{

    product.create(req.body)
    .then(product => res.json(product))
    .catch(err => console.log(err))
}