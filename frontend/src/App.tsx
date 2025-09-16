import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./ui/components/layout/Layout.tsx";
import LoginPage from "./ui/pages/LoginPage.tsx";
import CoursesPage from "./ui/pages/CoursesPage.tsx";
import HomePage from "./ui/pages/HomePage.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/courses"} element={<CoursesPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;