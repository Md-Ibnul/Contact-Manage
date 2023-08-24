import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Dashboard from "../Graph&Maps/GraphMaps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/graph&map",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;