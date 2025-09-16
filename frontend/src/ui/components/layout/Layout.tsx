import {Outlet} from "react-router";
import Navbar from "./Navbar.tsx";
import SideMenu from "./SideMenu.tsx";

const Layout = () => {
    return (
        <div className="h-screen w-screen">
            <div className={"fixed top-5 left-10 right-10 bg-white rounded-2xl shadow"}>
                <Navbar/>
            </div>
            <div className="fixed top-35 left-10 bottom-5 w-64 bg-white p-5 rounded-2xl shadow">
                <SideMenu/>
            </div>
            <div className="fixed top-35 left-80 right-10 bottom-5 bg-white rounded-2xl overflow-auto">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;