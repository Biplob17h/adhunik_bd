import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./pages/Routes/Routes";

function App() {
  return (
    <div className="max-w-sm md:max-w-full">
      <RouterProvider router={routes}></RouterProvider>
    </div>

  );
}

export default App;
