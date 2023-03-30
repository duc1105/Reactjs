import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Singup = (props) => {
    const navigate = useNavigate() 
    const [inputValue, setInputValue] = useState({}) 
    const onHandleChange = (e) => { 
        const name = e.target.name
        const value = e.target.value
        setInputValue({...inputValue,[name]:value}); 
    }
    const onHandleSubmit = (e) => { 
        e.preventDefault();
       
        props.onAddUser(inputValue)
        
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
            <div>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={onHandleChange} name='name' placeholder='nhập email' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={onHandleChange} name='email' placeholder='nhập email' />
                </div>
                <div>
                    <label htmlFor="">Mật khẩu</label>
                    <input type="text" onChange={onHandleChange} name="password"  />
                </div>
                <div>
                    <label htmlFor="">Nhập lại Mật khẩu</label>
                    <input type="text" onChange={onHandleChange} name="confirmPassword"  />
                </div>
               
                <button type="submit">Đăng kí</button>
            </form>
        </div>
    )
}

export default Singup
