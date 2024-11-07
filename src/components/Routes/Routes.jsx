import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Statistics from "../Statistic/Statistics";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Products></Products>,
          },
        ],
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default router;
