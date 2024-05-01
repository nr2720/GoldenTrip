import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartPage from "./componants/cartPage/CartPage";
import VipPage from "./componants/vipSection/VipPage";
import App from "./componants/main_page/App";
import ErrorPage from "./componants/ErrorPage";
import { useState } from 'react'

const RealApp = () => {

    const [cartEl, setCartEl] = useState(false);

    const handleCartClick = (el) => {
        switch(el.target.value) {
            case 'basicVip':
                setCartEl({
                    img: '/Img.svg',
                    title: 'Basic Vip',
                    text: 'Get a complete organised trip of two weeks, based on your preferences. Our personnal guides will accompagn you, making you discover the most insane places. Food, drinks, hotel, we handle everything.',
                    price: '3000'
                });
                break;
            case 'goldenVip':
                setCartEl({
                    img: '/Img.svg',
                    title: 'Golden Vip',
                    text: 'Take the experience to a next level. Let us bring you to the best hotels, fanciest restaurents and best activities. Access activities with VIP pass. Also, access all the advantage of Basic VIP trip.',
                    price: '10 000'
                });
                break;
            case 'royalVip':
                setCartEl({
                    img: '/Img.svg',
                    title: 'Royal Vip',
                    text: 'Live the best trip of your entire life. For two weeks, let us make you live the most Royal experience. Also, access all the advantages of Basic and Golden VIP Lorem ipsum del lorem ipsum de la nr eka dj m',
                    price: '20 000'
                });
                break;
            default:
                break;
        }
    
    }

    const clearCart = () => {
        setCartEl(false);
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/vip" element={<VipPage cartClick={handleCartClick}/>}/>
                <Route path="/cart" element={<CartPage el={cartEl} handleClearCart={clearCart}/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RealApp;