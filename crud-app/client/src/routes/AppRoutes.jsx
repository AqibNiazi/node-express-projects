import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Users from "../components/users";
import CreateUsers from "../components/create-user";
import UpdateUsers from "../components/update-user";
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/users",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Users />,
        },
      ],
    },
    {
      path: "/create-user",
      element: <CreateUsers />,
    },
    {
      path: "/update-user/:id",
      element: <UpdateUsers />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
