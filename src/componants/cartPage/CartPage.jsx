import Header from "../main_page/Header"
import CartHeader from "./CartHeader"
import CartBody from "./CartBody";
import { useState, useEffect } from 'react';
import './CartPage.css'

const CartPage = ({el, handleClearCart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [isEmpty, setIsEmpty] = useState(true);
    const [choice, setChoice] = useState(false);

    useEffect(() => {
        setChoice(el);
    }, [el]);

    useEffect(() => {
        if(choice != false) {
            setIsEmpty(false);
            setTotalPrice(el.price);
        }
        else{
            setIsEmpty(true);
            setTotalPrice(0);
        }
    }, [choice]);


    return (
        <div className="containerCartPage">
            <Header name='FlashTrip' className='cartPageHeader'/>
            <CartHeader price={totalPrice} onClick={handleClearCart}/>
            <CartBody isEmpty={isEmpty} El={choice} />
        </div>
    )
}

export default CartPage;