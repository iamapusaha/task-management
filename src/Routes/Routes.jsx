import { createBrowserRouter } from "react-router-dom";
import Root from '../Root'
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import About from "../Pages/About/About";
import Features from "../Pages/Features/Features";
export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/contactus',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/features',
          element:<Features></Features>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>
    }
  ]);
  