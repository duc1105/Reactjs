import instance from "./instance";

const getAllUsers = () => {
    return instance.get('/api/getuser');
}
const singup = (user) => {
    return instance.post('/api/singup',user)
}
const singin = (user) => {
    return instance.post('/api/singin',user)
}

export {singup,getAllUsers,singin}