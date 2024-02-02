const productController = require("../controllers/product.controller")

const routes = (app) =>{
    app.post('/api/product' , productController.CreateProduct)
    app.get('/api/product', productController.getAllProducts)
    app.get('/api/product/:id' , productController.getOneProduct)
}

module.exports = routes;