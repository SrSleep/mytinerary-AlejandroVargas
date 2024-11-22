import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StandarLayout from "./Layouts/StandarLayout";
import SimpleLayout from "./Layouts/SimpleLayout";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import NotFound from "./Pages/NotFound";
import Details from "./Pages/Details"
import SignIn from "./Pages/SignIn"
const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/citydetails", element: <Details /> },
    ],
  },
  {
    element:<SimpleLayout />,
    children: [
      { path: "/singin", element: <SignIn /> },
    ]
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
