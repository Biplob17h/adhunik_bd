import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Categories from "./pages/Home/Categories/Categories";
import ServiceSingle from "./pages/ServiceSingle/ServiceSingle";
import SignUp from "./components/Signup/Signup";

// Main api link for the project
export const MainApiLink = `http://localhost:5000`;

function App() {
  const location = useLocation();
  const hiddenFooterPaths = [
    "/services/:id",
    "/login",
    "/signup",
    "/services",
    "/servicesingle",
  ];

  const shouldHideFooter = hiddenFooterPaths.some((path) => {
    const regex = new RegExp(path.replace(":id", "\\d+")); // Adjust regex if your ID is not numeric
    return regex.test(location.pathname);
  });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Categories />} />
        <Route path="/servicesingle" element={<ServiceSingle />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default App;
