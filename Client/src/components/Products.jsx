import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Products(props) {
    const {products , setProducts} = props;

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
  return (
    <>
                 <h1>All Products</h1>
    {
        products.map((product,index) =>{
            return(
                <>
                    <p key={index}>{product.title}</p>
                    <Link to={`/products/${product._id}`}>{product.title}'s details</Link>
                </>
                )
        })

    }
    </>
  )
}

export default Products