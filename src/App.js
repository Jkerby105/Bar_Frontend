import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Drinks , action as DrinksAction} from "./page/Drinks.jsx";
import { DrinkSelection, loader as drinkLoader, action as drinkAction} from "./page/DrinkSelection.jsx";
import { OrderList, loader as OrderListLoader, action as OrderListAction } from "./page/OrderList.jsx";
import { Home } from "./page/Home";
import {HomeTwo} from './page/HomeTwo.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {index: true, element: <Home/>},
        {path: "/drinks", element: <Drinks/>, action: DrinksAction},
        {path: "/drinkSelection", element: <DrinkSelection/>,action: drinkAction ,loader: drinkLoader},
        {path: "/homeTwo", element: <HomeTwo/>},
        {path: "/order", element: <OrderList/>, action: OrderListAction, loader: OrderListLoader}
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
