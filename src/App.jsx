import { Outlet } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

function App() {
  return (
    <div className="font-Raleway">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
