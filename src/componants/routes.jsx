import App from "./main_page/App";
import VipPage from "./vipSection/VipPage";
import ErrorPage from "./ErrorPage";

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
];

export default routes;