import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Main from "./Layout/Main";
import Register from "./Routes/Register";
import Login from "./Routes/Login";
import AuthProvider from "./Features/Auth/AuthProvider";
import Blog from "./Routes/Blog";
import Add_toys from "./Routes/Pages/Add_toys/Add_toys";
import My_toys from "./Routes/Pages/My_toys/My_toys";
import All_toys from "./Routes/Pages/All_Toys/All_toys";
import UpdateData from "./Routes/Pages/UpdateData/UpdateData";
import Details from "./Components/Component/Details/Details";
import PrivateRoutes from "./Routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoutes>
            <Add_toys></Add_toys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoutes>
            <My_toys></My_toys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allToys",
        element: <All_toys />,
      },
      {
        path: "/updateData/:id",
        element: <UpdateData />,
        loader: ({ params }) =>
          fetch(
            `https://server-side-qthr3ewfi-mehediinfo10101-gmailcom.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/toysDetails/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-qthr3ewfi-mehediinfo10101-gmailcom.vercel.app/toys/${params.id}`
          ),
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
