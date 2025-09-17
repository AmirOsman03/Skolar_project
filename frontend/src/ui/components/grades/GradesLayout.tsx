import type {CourseGrade} from "../../../models/CourseGrade.tsx";

// Mock course grades
const courseGrades: CourseGrade[] = [
    {
        id: 1,
        courseId: "Бази на податоци",
        season: "Зимски",
        grade: 6,
        date: "2024-09-10",
    },
    {
        id: 2,
        courseId: "Алгоритми и Податочни структури",
        season: "Зимски",
        grade: 6,
        date: "2024-09-10",
    },
    {
        id: 3,
        courseId: "Оперативни Системи",
        season: "Зимски",
        grade: 6,
        date: "2024-09-10",
    },
]

const GradesLayout = () => {
    return (
        <div className={"p-5"}>
            <h1 className={"text-2xl"}>Grades</h1>

            {/* Grades table */}
            <div className="overflow-x-auto bg-gray-100">
                <table className="min-w-full">
                    <thead>
                    <tr className="text-left">
                        <th className="pt-5 font-light text-gray-600">#</th>
                        <th className="pt-5 font-light text-gray-600">Предмет</th>
                        <th className="pt-5 font-light text-gray-600">Семестар</th>
                        <th className="pt-5 font-light text-gray-600">Датум</th>
                        <th className="pt-5 font-light text-gray-600">Кредити</th>
                        <th className="pt-5 font-light text-gray-600">Оценка</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courseGrades.map((courseGrade, index) => (
                        <tr key={courseGrade.id} className="hover:bg-gray-200">
                            <td className="py-5 border-b border-gray-300">{index + 1}</td>
                            <td className="py-5 border-b font-semibold border-gray-300">{courseGrade.courseId}</td>
                            <td className="py-5 border-b font-semibold border-gray-300">{courseGrade.season}</td>
                            <td className="py-5 border-b font-semibold border-gray-300">{courseGrade.date}</td>
                            <td className="py-5 border-b font-semibold border-gray-300">6,00</td>
                            <td className="py-5 border-b font-semibold border-gray-300">{courseGrade.grade}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GradesLayout;