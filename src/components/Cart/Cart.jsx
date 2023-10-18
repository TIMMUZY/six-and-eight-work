import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import fetchAllCart from '../../store/creators/cartCreator';
import {Table} from 'react-bootstrap';
// import classes from './Cart.module.css';
import Spin from '../../pages/Spin/Spin';
// import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ deleteItem, addToCart, removeFromCart, }) => {
    const { cartStatus, cart, cartError } = useSelector ((state) => state.cart);
    const dispatch = useDispatch();

    const countTotalCost = (cart) => {
        let totalCost = 0;
          cart.forEach((item) => {
          totalCost += item.total;
        });
      
        return totalCost;
      };
      
    
    
    useEffect(() => {
        dispatch(fetchAllCart())
    },[dispatch]);


    const renderCartItems = (item, idx) => {
        const {title, id, count, total} = item;
        const onAddToCard = () => addToCart(id);
        const onAddRemoveFromCart = () => removeFromCart(id);
        const onDeleteFromCart = () => deleteItem(id)

        return (
            <>   <tr key={`item-${id}`} >
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}$</td>
                <td>
                    <Button onClick={onAddToCard} className='mx-1' variant='sucsess'>
                    <i class="fa-solid fa-plus"></i>
                    </Button>
                    <Button onClick={onAddRemoveFromCart} className='mx-1' variant='warning'>
                    <i class="fa-solid fa-minus"></i>
                    </Button>
                    <Button  onClick={onDeleteFromCart} className='mx-1' variant='danger'>
                    <i class="fa-solid fa-trash "></i>
                    </Button>
                </td>
            </tr>
            </>
         
        )
    }

    const statusCases = {
        empty: "You have not any items on cart",
        rejected: cartError,
        // fulfilled: cart?.map(renderCartItems),
        pending: <Spin />,
    }

    const totalCost = countTotalCost(cart);

    return (
        <div>
          <h1>Your Order</h1>
    
          {statusCases[cartStatus] ? (
            statusCases[cartStatus]
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Count</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
    
              <tbody>{cart?.map(renderCartItems)}</tbody>
            </Table>
          )}
          <div>Total cart items cost: {totalCost}$</div>
        </div>
      );
          
};

export default Cart;