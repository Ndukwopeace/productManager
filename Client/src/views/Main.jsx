import React,{useState,useEffect} from 'react'
import Form from '../components/Form';
import Products from '../components/Products';
import axios from 'axios' 

function Main(props) {
    const [products , setProducts] = useState([]);

        // get the products from our route 'api/people'
        useEffect(()=>{
          axios.get("http://localhost:8000/api/product")
          .then((res)=> {
              console.log(res)
              console.log(res.data)
              setProducts(res.data)
          })
          .catch(err=>{console.log(err)})
      },[])

          // create product 
        const createProduct = (productObject) =>{  // => pass in the product object you want to create 
          axios.post("http://localhost:8000/api/product",productObject)
          .then(res => {
              console.log(res.data)
              setProducts([...products ,res.data]);
          }
          )

      }
    
    const removeFromDom = (itemId) =>{
            // products.map(product => console.log(product._id,product.title))
            setProducts(products.filter(product =>product._id != itemId))
            
    }
  return (
    <>
    <Form products = {products}  onSubmitProp = {createProduct} initialTitle = "" initialDesc = "" intialPrice = {0} />
    <Products products = {products} removeFromDom={removeFromDom}/>
    </>
  )
}

export default Main