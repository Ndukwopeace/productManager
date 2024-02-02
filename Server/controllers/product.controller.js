const product = require("../models/product.model");

module.exports.CreateProduct = (req,res) =>{

    product.create(req.body)
    .then(product => res.json(product))
    .catch(err => console.log(err))
}

module.exports.getAllProducts = (req,res) =>{

    product.find({})
    .then(products => {
        console.log(products)
        res.json(products)})
    .catch(err => {
        console.log(err)
        res.json(err)
    })
}

module.exports.getOneProduct = (req,res) =>{

    product.findOne({_id:req.params.id})
    .then(product => {
        console.log(product)
        res.json(product)})
    .catch(err => {
        console.log(err)
        res.json(err)
    })
}