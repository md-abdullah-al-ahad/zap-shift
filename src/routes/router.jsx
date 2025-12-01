import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import Home from "../pages/home/Home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default router;
