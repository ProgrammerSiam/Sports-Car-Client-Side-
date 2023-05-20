import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./app.css";
import App from "./App";
import Main from "./Layout/Main";
import Register from "./Routes/Register";
import Login from "./Routes/Login";
import AuthProvider from "./Features/Auth/AuthProvider";
import Blog from "./Routes/Blog";
import Error from "./Routes/Error";

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
