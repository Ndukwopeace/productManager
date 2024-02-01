const express = require("express")
const app = express();
const port = 8000;
const cors = require("cors")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('../Server/config/mongoose.config')
require('./routes/product.routes')(app)

// choose where your app should listen the code
app.listen(port, console.log(`listening at port: ${port}`))