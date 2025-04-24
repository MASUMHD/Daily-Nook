import { Outlet } from "react-router-dom";
import NavBar from "../Share/NavBar";
import Footer from "../Share/Footer";

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;