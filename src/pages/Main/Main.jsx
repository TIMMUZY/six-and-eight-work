import React from 'react';
import { Booklist } from '../../components';
import Cart from '../../components/Cart/Cart';

const Main = () => {

    

    return (
        <main className="cotainer">
            <Booklist />
            <Cart />
        </main>
    );
}

export default Main;