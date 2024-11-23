import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StandarLayout from "./Layouts/StandarLayout";
import SimpleLayout from "./Layouts/SimpleLayout";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import NotFound from "./Pages/NotFound";
import Details from "./Pages/Details"
import SignIn from "./Pages/SignIn"
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import SignRoute from "./Components/SignRoute/SignRoute";
import axios from "axios";
import { setUser } from "./store/actions/authActions";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/citydetails", element: <><PrivateRoute><Details /></PrivateRoute></> },
    ],
  },
  {
    element: <SimpleLayout />,
    children: [
      { path: "/signin", element: <SignRoute><SignIn /></SignRoute> },
    ]
  },
  { path: "/*", element: <NotFound /> },
]);

const loginWithToken = async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/api/auth/validatetoken", { headers: { Authorization: `Bearer ${token}` } });
    console.log("LOG de response app: ", response.data);

    return response.data.user;
  } catch (error) {
    console.log(error);
  }

}
function App() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }));
    })
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
