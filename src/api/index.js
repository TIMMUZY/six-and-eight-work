import axios from 'axios';

const instanse = axios.create({ baseURL: process.env.REACT_APP_SERVER_API })

//USERS
const getUsers = () => instanse.get('/userList');

//POST
const getPosts = () => instanse.get('/posts');

//BOOKS
const getBooks = () => instanse.get('/books');
const createBooks = (payload) => instanse.post("/books", payload);

//CART

const getCartItems = () => instanse.get("/cart");
const createCartItem = (payload) => instanse.post("/cart" , payload)
const editCartItem = (payload) => instanse.put(`/cart/${payload.id}` , payload)
const deleteCartItem = (payload) => instanse.delete(`/cart/${payload}`)

export const api = {
    getUsers,
    getPosts,
    getBooks,
    createBooks,
    getCartItems,
    createCartItem,
    editCartItem,
    deleteCartItem,

}

