const productController = require("../controllers/product.controller")

const routes = (app) =>{
    app.post('/api/product' , productController.CreateProduct)
    app.get('/api/product', productController.getAllProducts)
    app.get('/api/product/:id' , productController.getOneProduct)
    app.patch('/api/product/:id' , productController.updateOne)
    app.delete('/api/product/:id' , productController.deleteOne)


}

module.exports = routes;