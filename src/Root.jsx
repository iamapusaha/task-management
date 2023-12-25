import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navigation/Navbar";
import Footer from "./Components/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;