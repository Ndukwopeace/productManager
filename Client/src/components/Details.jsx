import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';

function Details(props) {
    const [product , setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) =>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>{console.log(err)})

    },[])
  return (
    <>
        <div>
            <h2>{product.title}</h2>
            <p>Description : {product.description}</p>
            <p>Price: $ {product.price} </p>

        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default Details