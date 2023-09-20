import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./Home/Home";
import Blog from "./Blog";
import Recipe from "./Recipe/Recipe";
import RecipeDetail from "./Recipe/RecipeDetail";
import Error from "./Error";
import Login from "./LoginRegister/Login";
import Authprovider from "./Provider/AuthProvider";
import AuthProvider from "./Provider/AuthProvider";
import Register from "./LoginRegister/Register";
import PrivateRoute from "./LoginRegister/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path:'/register',
        element:<Register/>
      }
      ,
      {
        path: "/chef/:name",

        element: <PrivateRoute> <Recipe /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://chef-hunter-server-joysd1010.vercel.app/chef/${params.name}`),
      },
      {
        path: "/recipe/:id",

        element: <RecipeDetail />,
        loader: ({ params }) =>
          fetch(`https://chef-hunter-server-joysd1010.vercel.app/recipe/${params.id}`),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
      
    
  </React.StrictMode>
);
