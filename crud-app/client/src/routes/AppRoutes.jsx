import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Users from "../components/Users";
import CreateUsers from "../components/CreateUsers";
import UpdateUsers from "../components/UpdateUsers";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Users />,
        },
      ],
    },
    {
      path: "/create",
      element: <CreateUsers />,
    },
    {
      path: "/update",
      element: <UpdateUsers />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
