const productController = require("../controllers/product.controller")

const routes = (app) =>{
    app.post('/api/product' , productController.CreateProduct)
}

module.exports = routes;