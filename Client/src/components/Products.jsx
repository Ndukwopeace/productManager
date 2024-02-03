import React,{useEffect, useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
function Products(props) {
    const { removeFromDom, products} = props;
    


    const deleteItem = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res) =>{
            removeFromDom(id)
        })
        .catch(err => console.log(err))
    }
  return (
    <>
                 <h1>All Products</h1>
    {
        products.map((product,index) =>{
            return(
                <>
                    <p key={index}>{product.title}</p>
                    <Link to={`/products/${product._id}`}>{product.title}'s details</Link>|
                    <Link to={`/products/edit/${product._id}`}>Edit</Link>|
                    <DeleteButton productId = {product._id} successCallBack = {(e) => removeFromDom(product._id)}/>

                </>
                )
        })

    }
    </>
  )
}

export default Products