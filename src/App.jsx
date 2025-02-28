import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./ui/main/MainLayout";
import PanelLayout from "./ui/admin-user/PanelLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import ErrorPage from "./ui/common/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <PanelLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },

  {
    path: "/user",
    element: <PanelLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
