import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Booklist } from '../../components';
import Cart from '../../components/Cart/Cart';
import { updateOrder } from '../../helpers';

const Main = () => {
    const { cart } = useSelector((state) => state.cart);
    const { books } = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const addToCard = (bookId) => updateOrder({ books, cart, bookId, dispatch, quantity: 1});
    const removeFromCart= (bookId) => updateOrder({ books, cart, bookId, dispatch, quantity: -1 });
    const deleteItem = (bookId) => updateOrder({books, cart, bookId, dispatch,quantity: 3});

    
    return (
        <main className='container'>
            <Booklist addToCart={addToCard}/>
            <Cart addToCart={addToCard} removeFromCart={removeFromCart} deleteItem={deleteItem}/>
        </main>
    );
};


export default Main;