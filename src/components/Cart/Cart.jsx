import React, { useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCart } from '../../store/creators/cartCreator';
import {Table} from 'react-bootstrap';
import classes from './Cart.module.css';
const Cart = () => {
    const { cartStatus, cart, cartError } = useSelector ((state) => state.cart);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllCart())
    },[]);


    const renderCartitems = (item, idx) => {
        const {title, id, count,price} = item;

        return (
            <tr key={`item-${id}`} >
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{count*price}</td>
                <td>
                    <Button className='mx-1' variant='sucsess'>
                    <i class="fa-solid fa-plus"></i>
                    </Button>
                    <Button className='mx-1' variant='warning'>
                    <i class="fa-solid fa-minus"></i>
                    </Button>
                    <Button className='mx-1' variant='danger'>
                    <i class="fa-solid fa-trash "></i>
                    </Button>
                </td>
            </tr>
        )
    }

    const statusCases = {
        empty: "You have not any items on cart",
        rejected: cartError,
        fulfilled: cart?.map(renderCartitems),
        pending: <Spinner />,
    }

    return (
    <div>
     <h1>Your order</h1>
     <Table>
        
        <thead>
            <tr>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
            <tbody>{statusCases[cartStatus]}</tbody>
    </Table>
    </div>
    );
};

export default Cart;