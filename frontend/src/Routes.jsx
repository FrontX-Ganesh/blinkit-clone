import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MainLayout from "./components/Layouts/MainLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
