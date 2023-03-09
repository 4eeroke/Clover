import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../index.css";

const Root = () => {
  return (
    <div>
        <div className="container">
            <Header />
            <main>
            <Outlet />
            </main>
        </div>
      <Footer />
    </div>
  );
};

export default Root;
