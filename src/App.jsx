import React from "react";
import Home from "./pages/home/Home";
import Sidebar from "./component/sidebar/Sidebar";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const Layout = () => {
  return <Outlet></Outlet>;
};
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  // {
  //   path: "*",
  //   element: <PageNotFound />,
  // },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
