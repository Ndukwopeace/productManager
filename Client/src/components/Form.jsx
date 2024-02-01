import React,{useState} from 'react'
import axios from 'axios'

function Form() {
    const [title , setTitle ] = useState("");
    const [desc , setDesc ] = useState("");
    const [price , setPrice ] = useState(0);

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/product",{
            title,
            description: desc,
            price
        }).then(res => console.log(res.data))

    }

  return (
    <>          
                    {/* heading */}

                                <h1>Product Manager</h1>
                    
                    {/* Form  */}

        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type = "text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type = "number" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type = "text" onChange={(e) => setDesc(e.target.value)}/>
            </div>

            <input type = "submit" value ="Create"/>

        </form>
    </>
  )
}

export default Form