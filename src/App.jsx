import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StandarLayout from "./Layouts/StandarLayout";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
