import StudentProgressChart from "../components/analytics/StudentProgressChart.tsx";
import CumulativeGpa from "../components/analytics/CumulativeGpa.tsx";
import {MdOutlineShowChart} from "react-icons/md";
import {FaGraduationCap} from "react-icons/fa";
import type {User} from "../../models/User.tsx";

const student: User = {
    id: "2",
    name: "Амир",
    surname: "Осман",
    studyYear: 3,
    earnedCredits: 130,
    major: "Софтверско Инженерство",
    role: "student"
};

const HomePage = () => {
    return (
        <div className={"p-5 bg-gray-100"}>
            <h1 className={"text-2xl"}>Home</h1>

            <h2 className={"my-5 text-3xl font-bold"}>Добредојдовте {student.name} {student.surname}!</h2>

            <div className={"grid grid-cols-2 gap-5 mt-3"}>
                <div className={"justify-items-center bg-white p-5 rounded-xl shadow-md"}>
                    <div className={"flex justify-center items-center"}>
                        <FaGraduationCap className={"mx-2 text-4xl text-gray-700"}/>
                        <h1 className={"text-xl text-center"}>Патот до твоето дипломирање</h1>
                    </div>
                    <StudentProgressChart earnedCredits={student.earnedCredits} studyYears={student.studyYear}/>
                </div>
                <div className={"bg-white justify-items-center p-5 rounded-xl shadow-md"}>
                    <div className={"flex justify-center items-center"}>
                        <MdOutlineShowChart className={"mx-2 text-4xl text-gray-700"}/>
                        <h1 className={"text-xl text-center"}>Твојот просек:</h1>
                    </div>

                    <CumulativeGpa avgGrade={7.8} maxGrade={10}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;