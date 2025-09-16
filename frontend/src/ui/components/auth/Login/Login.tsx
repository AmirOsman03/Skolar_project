import {MdLock} from "react-icons/md";
import {IoIosMail} from "react-icons/io";
import {RxExit} from "react-icons/rx";
import {FcGoogle} from "react-icons/fc";
import {FaApple, FaFacebookF} from "react-icons/fa";

const Login = () => {
    return (
        <div className="h-9/16 bg-gradient-to-b from-purple-100 to-neutral-50 w-2/8 rounded-2xl p-5 shadow">
            <div className="flex justify-center items-center">
                <div className="bg-white w-15 h-15 rounded-2xl shadow-xl flex justify-center items-center">
                    <RxExit className="text-2xl"/>
                </div>
            </div>
            <h1 className="text-center text-xl font-bold mt-5">Sign in with email</h1>
            <p className="text-center text-gray-500 leading-tight mt-2 ">
                Manage your classes, schedules, and grades in one place. For free
            </p>

            <form className="mt-6 space-y-4 mx-10">
                <div className="relative">
                    <IoIosMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <div className="relative">
                        <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <p className={"text-sm text-end mt-2 font-semibold"}>Forgot password?</p>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-b from-gray-800 to-zinc-900 text-white py-2 rounded-xl hover:bg-zinc-900 cursor-pointer"
                >
                    Get Started
                </button>
            </form>
            <div className={"my-5"}>
                <p className={"text-sm text-gray-500 font-semibold text-center"}>Or sign in with</p>
                <div className={"grid grid-cols-3 gap-4 justify-items-center mt-5"}>
                    <div>
                        <FcGoogle className={"text-xl cursor-pointer"}/>
                    </div>
                    <div>
                        <FaFacebookF className={"text-xl cursor-pointer"}/>
                    </div>
                    <div>
                        <FaApple className={"text-xl cursor-pointer"}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
