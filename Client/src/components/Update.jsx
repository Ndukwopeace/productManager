import React,{useState , useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
import DeleteButton from './DeleteButton';


const Update = (props) => {

    const [product, setProduct] = useState({});
    const [loaded , setLoaded] = useState(false); // => to make sure the useEffect loads before the app renders
    const {id} = useParams(); // => use useParams for routes
    const navigate = useNavigate();

    useEffect(()=>{
    axios.get(`http://localhost:8000/api/product/${id}`)
    .then(res =>{
        console.log(res.data)
        setProduct(res.data)
        setLoaded(true)
    })
    .catch(err =>{
        console.log(err)
        res.json(err);
    }
    )
    },[])
    

    const updateProduct = (productObject) =>{

        axios.patch(`http://localhost:8000/api/product/${id}`,productObject)
        .then(res =>{
            console.log(res.data)
            navigate("/products")
        })
        .catch(res =>{
            console.log(err)
            res.json(err)
        })
    }


  return (
    <>
        {
            loaded && <Form onSubmitProp = {updateProduct} initialTitle ={product.title} initialDesc = {product.description} initialPrice = {product.price}/>
        }

        <DeleteButton successCallBack={(e)=>navigate("/products")}/>


        
    </>
  )
}



export default Update