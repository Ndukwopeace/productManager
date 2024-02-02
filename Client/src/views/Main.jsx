import React,{useState} from 'react'
import Form from '../components/Form';
import Products from '../components/Products';

function Main(props) {
    const [products , setProducts] = useState([]);
    
    const removeFromDom = (itemId) =>{
            // products.map(product => console.log(product._id,product.title))
            setProducts(products.filter(product =>product._id != itemId))
            
    }
  return (
    <>
    <Form products = {products}  setProducts = {setProducts}/>
    <Products products = {products}  setProducts = {setProducts} removeFromDom={removeFromDom}/>
    </>
  )
}

export default Main