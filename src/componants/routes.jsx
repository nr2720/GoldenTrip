import App from "./main_page/App";
import VipPage from "./vipSection/VipPage";
import ErrorPage from "./ErrorPage";
import CartPage from "./cartPage/CartPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/vip',
        element: <VipPage />
    },
    {
        path: '/cart',
        element: <CartPage />
    }
];

export default routes;