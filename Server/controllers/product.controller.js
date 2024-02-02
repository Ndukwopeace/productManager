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

module.exports.updateOne = (req,res) =>{

    product.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true})
    .then(updatedProduct => {
        console.log(updatedProduct)
        res.json(updatedProduct)})
    .catch(err => {
        console.log(err)
        res.json(err)
    })
}

module.exports.deleteOne = (req,res) =>{

    product.deleteOne({_id:req.params.id})
    .then(confirmDelete => {
        console.log(confirmDelete)
        res.json(confirmDelete)})
    .catch(err => {
        console.log(err)
        res.json(err)
    })
}
