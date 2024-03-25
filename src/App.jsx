import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AppLayout} from "./ui/AppLayout.jsx";
import {Home} from "./ui/Home.jsx";
import {Menu} from "./features/menu/Menu.jsx";
import {Cart} from "./features/cart/Cart.jsx";
import {Order} from "./features/order/Order.jsx";
import {CreateOrder} from "./features/order/CreateOrder.jsx";

function App() {

    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: '/menu',
                    element: <Menu />
                },
                {
                    path: '/cart',
                    element: <Cart />
                },
                {
                    path: '/order/new',
                    element: <CreateOrder />

                },
                {
                    path: '/order/:id',
                    element: <Order />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default App
