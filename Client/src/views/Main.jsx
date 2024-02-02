import React,{useState} from 'react'
import Form from '../components/Form';
import Products from '../components/Products';

function Main(props) {
    const [products , setProducts] = useState([]);

  return (
    <>
    <Form products = {products}  setProducts = {setProducts}/>
    <Products products = {products}  setProducts = {setProducts}/>
    </>
  )
}

export default Main