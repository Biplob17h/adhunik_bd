import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import AllServices from "../AllServices/AllServices";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path:'/allservices',
          element:<AllServices/>
        }
    ]
  },
]);

export default routes;
