import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Blog from "../Pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1 className="text-8xl mt-56 font-bold space-x-3 text-red-600 text-center "><span>4</span> <span>0</span> <span>4 </span></h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ],
  },
]);
