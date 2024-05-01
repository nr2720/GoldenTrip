import Header from "../main_page/Header"
import CartHeader from "./CartHeader"
import CartBody from "./CartBody";
import { useState, useEffect } from 'react';
import './CartPage.css'

const CartPage = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [isEmpty, setIsEmpty] = useState(true);
    const [choice, setChoice] = useState(null);


    return (
        <div className="containerCartPage">
            <Header name='Golden Trip &#x2708;'/>
            <CartHeader price={totalPrice}/>
            <CartBody isEmpty={isEmpty} El={choice} />
        </div>
    )
}

export default CartPage;