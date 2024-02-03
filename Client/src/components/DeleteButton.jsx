import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {

    const {productId,successCallBack} = props
    
    const deleteItem = (e) =>{
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then((res) =>{
            successCallBack()
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <button onClick={deleteItem} >Delete</button>
    </div>
  )
}

export default DeleteButton