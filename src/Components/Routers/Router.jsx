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
import Contact from "../Pages/Contact";
import WishLists from "../WishLists/WishLists";
import AddToCard from "../WishLists/AddToCard";

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
      {
        path: "/products/:id",
        element: <ProductsDetails/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/wishlists",
        element: <WishLists/>
      },
      {
        path: "/add-to-card",
        element: <AddToCard/>
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
