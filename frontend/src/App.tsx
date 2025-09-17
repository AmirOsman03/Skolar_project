import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./ui/components/layout/Layout.tsx";
import LoginPage from "./ui/pages/LoginPage.tsx";
import CoursesPage from "./ui/pages/CoursesPage.tsx";
import HomePage from "./ui/pages/HomePage.tsx";
import CalendarPage from "./ui/pages/CalendarPage.tsx";
import GradesPage from "./ui/pages/GradesPage.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/courses"} element={<CoursesPage/>}/>
                    <Route path={"/calendar"} element={<CalendarPage/>}/>
                    <Route path={"/grades"} element={<GradesPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;