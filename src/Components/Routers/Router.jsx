import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Blog from "../Pages/Blog";
import MainDashboard from "../Dashboard/MainDashboard";
import DasHome from "../Dashboard/DasComponents/DasHome";
import DasProducts from "../Dashboard/DasComponents/DasProducts";
import LogIn from "../Share/LogIn";
import Registration from "../Share/Registration";
import Error from "../Share/Error";
import AddProducts from "../Dashboard/DasComponents/AddProducts";
import ProductsDetails from "../Share/ProductsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/registration",
        element: <Registration/>
      },
      // ProductsDetails route
      {
        path: "/products/:id",
        element: <ProductsDetails/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <MainDashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DasHome />,
      },
      {
        path: "/dashboard/products",
        element: <DasProducts />,
      },
      {
        path: "/dashboard/add-products",
        element: <AddProducts />,
      }
    ],
  },
]);
