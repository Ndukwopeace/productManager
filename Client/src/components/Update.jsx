import React,{useState , useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


const Update = (props) => {

    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
    const [price , setPrice] = useState(0);
    
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/product/${id}`)
    .then(res =>{
        setTitle(res.data.title);
        setDesc(res.data.description);
        setPrice(res.data.price);
    })
    .catch(err =>{
        console.log(err)
        res.json(err);
    }
    )
    },[])
    

    const updateProduct = (e) =>{
        
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/product/${id}`,{title,description: desc ,price})
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
          <form onSubmit={updateProduct}>
            <div>
                <label>Title</label>
                <input type = "text"  value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type = "number"  value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type = "text" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>

            <input type = "submit" value ="Create"/>

        </form>

        <button onClick={() => navigate(-1)}>Go back</button>


        
    </>
  )
}



export default Update