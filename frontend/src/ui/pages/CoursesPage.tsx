const CoursesPage = () => {
    return (
        <div className={"p-5 bg-gray-100"}>
            <h1 className={"text-2xl"}>Courses</h1>
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
                    <tr className="hover:bg-gray-200">
                        <td className="py-5 border-b font-semibold border-gray-300">Електронска и мобилна трговија-2024/2025/L</td>
                        <td className="py-5 border-b font-semibold border-gray-300">Костадин Мишев</td>
                        <td className="py-5 border-b font-semibold border-gray-300">70%</td>
                        <td className="py-5 border-b font-semibold border-gray-300">25</td>
                    </tr>
                    <tr className="hover:bg-gray-200">
                        <td className="py-5 border-b border-gray-300 font-semibold">Дизајн на интеракцијата човек-компјутер-2024/2025/L</td>
                        <td className="py-5 border-b font-semibold border-gray-300">Влатко Спасев</td>
                        <td className="py-5 border-b font-semibold border-gray-300">45%</td>
                        <td className="py-5 border-b font-semibold border-gray-300">30</td>
                    </tr>
                    </tbody>
                </table>
            </div>
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

    );
};

export default CoursesPage;