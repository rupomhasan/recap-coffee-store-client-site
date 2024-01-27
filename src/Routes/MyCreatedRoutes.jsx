import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Auth/Login";
import AddCoffee from "../Layout/AddCoffee";
import EditCoffee from "../Layout/EditCoffee";
import AboutCoffee from "../Layout/AboutCoffee";
import Register from "../Auth/Register";
import Users from "../Layout/Users";

const MyCreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/coffee"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/editCoffee/:id",
        element: <EditCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/aboutCoffee/:id",
        element: <AboutCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/user",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);
export default MyCreatedRoutes;
