import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/api/products');
}
const deleteProduct = (id) => {
    return instance.delete('/api/products/' + id);
}
const addProduct = (product) => {
    return instance.post('/api/products', product);
}
const updateProduct = (product) =>{
    return instance.patch("/api/products/"+ product._id, product)
}
export { getAllProduct, deleteProduct, addProduct , updateProduct }