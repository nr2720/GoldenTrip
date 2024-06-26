import App from "./main_page/App";
import VipPage from "./vipSection/VipPage";
import ErrorPage from "./ErrorPage";
import CartPage from "./cartPage/CartPage";
import { useState } from 'react';



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
                    title: 'Basic Vip',
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



const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/vip',
        element: <VipPage cartClick={handleCartClick}/>
    },
    {
        path: '/cart',
        element: <CartPage/>
    }
];



export default routes;

// import { Routes, Route } from "react-router-dom"


// const RouteApp = () => {
//     return(
//         <Routes>
//             <Route path="/" element={<App />} errorElement={<ErrorPage />}/>
//         </Routes>

//     )
// }