// import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import Singup from './pages/admin/singup'
import { getAllUsers, singin, singup } from './api/user'
import Singin from './pages/admin/Singin'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import AdminLayout from './pages/layout/AdminLayout'


function App() {
  const [products, setProduct] = useState([])
  const [users, setUser] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id) => {
    const newData = products.filter(product=> product._id !== id)
    if(confirm('Bạn có muốn xóa'))
    deleteProduct(id).then(() => setProduct([...newData]))
  } 
  const onHandleAdd = (product) => {
    addProduct(product).then(()=> setProduct([...products,product]))
  }
  
  const onHandleUpdate = (product,id) => {
    const newData = products.filter(item=> item._id != id)
    updateProduct(product).then(() => setProduct([...newData,product]))
   }

useEffect(() => {
    getAllUsers().then(({ data }) => setUser(data))
    
  }, [])
  const onHandleAddUser = (user) => {
    singup(user).then(()=> {
      setUser([...users])  
      if( user){
        navigate('/singin')
        alert("Ngon luôn")
      }
    }).catch(error=>{
      alert(error.response.data.message)
    })
  }
  const onHandleSingin = (user) => {
    singin(user).then(({data}) => {localStorage.setItem("accessToken", data.accessToken) 
    console.log(data.accessToken)
    console.log( data);
    if(data.user.role == 'admin'){
      navigate('/admin')
    }else{
      navigate('/')
    }
    
  } 
  ).catch(error=>{
    alert(error.response.data.message)
  })
    
  }

  const onHandleLogout = () =>{
    localStorage.removeItem("accessToken")
    navigate('/singin')
    location.reload()
  }
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products' >
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} onLogout={onHandleLogout} />} />
                <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
                <Route path='/admin/products/:id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate}  />} />
                <Route />
          </Route>
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate}  />} />
        <Route path='/singup' element={<Singup onAddUser={onHandleAddUser}  /> } />
        <Route path='/singin' element={<Singin  onSignin={onHandleSingin}  /> } />
        
      </Routes>
    </div >
  )
}

export default App
