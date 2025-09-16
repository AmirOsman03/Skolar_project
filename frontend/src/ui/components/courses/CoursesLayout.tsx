import type {Course} from "../../../models/Course.tsx";
import type {User} from "../../../models/User.tsx";

// Mock professor and student
const professor: User = {
    id: "1",
    name: "Слободан",
    surname: "Калајџиски",
    role: "professor",
    studyYear: null,
    earnedCredits: null,
    major: null
};

// Mock courses
const courses: Course[] = [
    {
        id: 1,
        name: "Бази на податоци",
        acronym: "Бнп",
        professor: professor,
        progress: 50,
        numberOfStudents: 160,
    },
    {
        id: 2,
        name: "Алгоритми и Податочни структури",
        acronym: "Аипс",
        professor: professor,
        progress: 70,
        numberOfStudents: 200,
    },
    {
        id: 3,
        name: "Оперативни Системи",
        acronym: "ОС",
        professor: professor,
        progress: 20,
        numberOfStudents: 320,
    },
]

const CoursesLayout = () => {
    return (
        <div className={"p-5 bg-gray-100"}>
            <h1 className={"text-2xl"}>Courses</h1>

            {/* Courses table */}
            <div className="overflow-x-auto bg-gray-100">
                <table className="min-w-full">
                    <thead>
                    <tr className="text-left">
                        <th className="pt-5 font-light text-gray-600">Course</th>
                        <th className="pt-5 font-light text-gray-600">Teacher</th>
                        <th className="pt-5 font-light text-gray-600">Progress</th>
                        <th className="pt-5 font-light text-gray-600">Students</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses.map(course => (
                        <tr key={course.id} className="hover:bg-gray-200">
                            <td className="py-5 border-b font-semibold border-gray-300">{course.name}</td>
                            <td className="py-5 border-b font-semibold border-gray-300">{course.professor.name} {course.professor.surname}</td>
                            <td className="py-5 border-b font-semibold border-gray-300">{course.progress}%</td>
                            <td className="py-5 border-b font-semibold border-gray-300">{course.numberOfStudents}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Recommented section */}
            <div>
                <h1 className={"text-xl mt-5"}>Recommended for you</h1>
                <div className={"grid grid-cols-3 gap-4 mt-3"}>
                    <div className={"bg-white w-full h-64 rounded-2xl p-5 shadow-md"}>
                        <div className={"flex justify-between"}>
                            <p className={"bg-green-300 px-3 py-1 rounded-2xl"}>БнП</p>
                            <p className={"px-3 py-1 text-gray-500"}>46 lessons</p>
                        </div>
                        <div className={"mt-3"}>
                            <p className="font-medium">Бази на податоци-2024/2025/Z</p>
                            <p className="text-sm line-clamp-4">
                                Запознавање на студентот со основните концепти за работа со бази на податоци, начините на
                                нивно моделирање и имплементирање, како и работа со прашалните јазици. Студентот ќе биде
                                способен да моделира бази на податоци преку семантичко и релациско моделирање и процес на
                                нормализација, ќе знае практично да го применува SQL стандардот за креирање, одржување и
                                манипулација на релациските бази на податоци. Студентот ќе има познавање за основните
                                концепти на конкурентно работење и трансакции.
                            </p>
                        </div>

                        <button className={"border border-blue-600 text-blue-600 px-5 py-2 rounded-xl mt-5"}>
                            Learn more
                        </button>
                    </div>
                    <div className={"bg-blue-200 w-full h-64 rounded-2xl "}>
                        {/*Recommented Course num2*/}
                    </div>
                    <div className={"bg-green-200 w-full h-64 rounded-2xl "}>
                        {/*Recommented Course num3*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesLayout;