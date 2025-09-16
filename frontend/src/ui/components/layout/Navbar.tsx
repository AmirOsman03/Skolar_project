import {FaBell, FaBook, FaEnvelope, FaUserCircle} from "react-icons/fa";
import {useNavigate} from "react-router";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between bg-white rounded-2xl py-3 px-6">
            <div className="flex items-center">
                <div className="bg-blue-600 p-4 rounded-xl flex items-center justify-center">
                    <i className="text-white text-2xl">
                        <FaBook className="text-3xl"/>
                    </i>
                </div>
                <span className="ml-4 text-2xl font-bold text-gray-700">
                    Skolar
                </span>
            </div>
            <div className="flex items-center space-x-4">
                <div
                    className="border-2 border-gray-300 rounded-full p-3 cursor-pointer hover:text-blue-600 hover:border-blue-600 transition-colors">
                    <FaEnvelope className="text-gray-700 text-xl"/>
                </div>
                <div
                    className="border-2 border-gray-300 rounded-full p-3 cursor-pointer hover:text-blue-600 hover:border-blue-600 transition-colors">
                    <FaBell className="text-gray-700 text-xl"/>
                </div>
                <div
                    onClick={() => navigate("/login")}
                    className="border-2 border-gray-300 rounded-full p-3 cursor-pointer hover:text-blue-600 hover:border-blue-600 transition-colors">
                    <FaUserCircle className="text-gray-700 text-2xl"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;