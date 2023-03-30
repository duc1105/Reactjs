import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProductPage = (props) => {
    const navigate = useNavigate() 
    const [inputValue, setInputValue] = useState({}) 
    const onHandleChange = (e) => { 
        const {name , value} = e.target
        setInputValue({...inputValue,[name]:value}); 
    }
    const onHandleSubmit = (e) => { 
        e.preventDefault();
        props.onAdd(inputValue)
        navigate('/admin/products') 
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={onHandleChange} name='name' placeholder='nhập tên' />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" onChange={onHandleChange} name="price" id="" />
                </div>
                
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AddProductPage