import React,{useState} from 'react'
import axios from 'axios'

function Form(props) {
    const {onSubmitProp,initialTitle , initialDesc, initialPrice} = props;
    const [title , setTitle ] = useState(initialTitle); // => set the initial values to state so that you can manipulate the form 
    const [desc , setDesc ] = useState(initialDesc);
    const [price , setPrice ] = useState(initialPrice);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({title,description: desc,price})
    } 


  return (
    <>          
                    {/* heading */}

                                <h1>Product Manager</h1>
                    
                    {/* Form  */}

        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type = "text" name="title" value = {title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type = "number" name="price" value = {price }onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type = "text" name="desc" value = {desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>

            <input type = "submit" value ="Create"/>

        </form>
    </>
  )
}

export default Form