import React,{useEffect,useState} from 'react'
import {useParams , useNavigate, Navigate} from "react-router-dom"
const UpdateProduct = (props) => {
  const navigate = useNavigate() 
  const {id} = useParams();
  const [product, setProduct] = useState({}) 
  const [inputValue, setInputValue] = useState({}) 
  useEffect(()=>{
    const currentProduct = props.products.find(product => product._id == id)
    setProduct(currentProduct)
  },[props])
  const onHandleChange = (e) => { //lấy giá trị từ input
    const  name = e.target.name
    const  value = e.target.value //lấy name và value từ input
    setInputValue({ ...inputValue, [name]: value }) //gán lại giá trị cho biến inputValue
}
const onHandleSubmit = (e) => { //hàm thực thi khi chạy sự kiện submit form
    e.preventDefault()
    const updateData = { ...product, ...inputValue } //lấy giá trị từ biến product và biến inputValue
    props.onUpdate(updateData,id);
    navigate('/admin/products') //gọi hàm onUpdate từ props truyền vào
}
return (
    <div>
        <form action="" onSubmit={onHandleSubmit}>
            <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
            <input type="number" defaultValue={product?.price} onChange={onHandleChange} name='price' />
            <button type="submit">Update Product</button>
        </form>
    </div>
)
}

export default UpdateProduct
