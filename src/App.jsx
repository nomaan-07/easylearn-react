import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./ui/main/MainLayout";
import PanelLayout from "./ui/admin-user/PanelLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import ErrorPage from "./ui/common/ErrorPage";
import { LanguageProvider } from "./contexts/LanguageContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";

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
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default App;
