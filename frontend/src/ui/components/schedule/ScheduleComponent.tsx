import {BiPlus} from "react-icons/bi";
import {useState} from "react";
import type {Schedule} from "../../../models/Schedule.tsx";

// Mock schedules
const schedules: Schedule[] = [
    {
        id: 1,
        date: "2025-03-12",
        from: "10:00",
        to: "12:00",
        course: "Бази на податоци",
        lecture: "Предавање 5",
        teacher: "Слободан Калајџиски",
        room: "АМФ ТМФ",
        numberOfStudents: 150,
        status: "upcoming",
    },
    {
        id: 2,
        date: "2025-03-10",
        from: "08:00",
        to: "10:00",
        course: "Алгоритми и Податочни структури",
        lecture: "Вежби 2",
        teacher: "Бојана Котеска",
        room: "АМФ Машински",
        numberOfStudents: 200,
        status: "past",
    },
    {
        id: 3,
        date: "2025-03-15",
        from: "14:00",
        to: "16:00",
        course: "Оперативни Системи",
        lecture: "Вежби 4",
        teacher: "Костадин Мишев",
        room: "АМФ Машински",
        numberOfStudents: 320,
        status: "upcoming",
    },
    {
        id: 4,
        date: "2025-03-15",
        from: "16:00",
        to: "18:00",
        course: "Електронска Мобилна Трговија",
        lecture: "Предавања 2",
        teacher: "Костадин Мишев",
        room: "АМФ Машински",
        numberOfStudents: 430,
        status: "past",
    },
    {
        id: 5,
        date: "2025-10-15",
        from: "12:00",
        to: "16:00",
        course: "Електронска Мобилна Трговија",
        lecture: "Предавања 2",
        teacher: "Костадин Мишев",
        room: "АМФ Машински",
        numberOfStudents: 430,
        status: "upcoming",
    },
    {
        id: 6,
        date: "2025-09-16",
        from: "19:00",
        to: "21:00",
        course: "Оперативни Системи",
        lecture: "Предавања 2",
        teacher: "Костадин Мишев",
        room: "АМФ Машински",
        numberOfStudents: 430,
        status: "pending",
    },
]

export const ScheduleComponent = () => {
    const [active, setActive] = useState<"upcoming" | "pending" | "past">("upcoming");

    return (
        <div className={"p-5 bg-gray-100"}>
            {/* Top section */}
            <div className={"grid grid-cols-2 gap-5"}>
                <h1 className={"text-2xl"}>Calendar</h1>
                <div className={"flex justify-end"}>
                    <button
                        className={"flex border bg-blue-600 px-3 py-2 rounded-xl text-white font-light hover:bg-blue-700 transition-all duration-200 cursor-pointer"}>
                        <BiPlus className={"text-2xl mr-2"}/>
                        Create new schedule
                    </button>
                </div>
            </div>

            {/* Filter buttons */}
            <div className="grid grid-cols-2 gap-5 my-5">
                <div className="flex items-center">
                    <button
                        onClick={() => setActive("upcoming")}
                        className={`px-3 py-1 rounded-2xl cursor-pointer ${
                            active === "upcoming"
                                ? "bg-blue-600 text-white"
                                : "bg-white border-1 border-gray-500 text-gray-700"
                        }`}
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setActive("pending")}
                        className={`px-3 py-1 rounded-2xl mx-2 cursor-pointer ${
                            active === "pending"
                                ? "bg-blue-600 text-white"
                                : "bg-white border-1 border-gray-500 text-gray-700"
                        }`}
                    >
                        Pending
                    </button>
                    <button
                        onClick={() => setActive("past")}
                        className={`px-3 py-1 rounded-2xl cursor-pointer ${
                            active === "past"
                                ? "bg-blue-600 text-white"
                                : "bg-white border-1 border-gray-500 text-gray-700"
                        }`}
                    >
                        Past
                    </button>
                </div>
            </div>

            {/* Schedules */}
            <div className="mt-3">
                {["upcoming", "pending", "past"].map(statusKey => {
                    if (statusKey !== active) return null;

                    const filteredSchedules = schedules.filter(s => s.status === statusKey);

                    if (filteredSchedules.length === 0) {
                        return (
                            <p key={statusKey} className="text-gray-500 mt-5 text-center">
                                No schedules for {statusKey}
                            </p>
                        );
                    }

                    return (
                        <div key={statusKey} className="space-y-4">
                            {filteredSchedules.map(schedule => (
                                <div
                                    key={schedule.id}
                                    className={`bg-white w-full h-64 rounded-2xl p-5 shadow-md my-3 transition border-transparent border-2 hover:border-blue-600`}
                                >
                                    <div className="grid grid-cols-3 gap-5 h-full p-2">
                                        <div className="flex flex-col justify-between">
                                            <div className="flex space-x-5">
                                                <div>
                                                    <p className="text-gray-600">From</p>
                                                    <p className="font-semibold">{schedule.from}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600">To</p>
                                                    <p className="font-semibold">{schedule.to}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Students</p>
                                                <div className="flex">
                                                    <p className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white">
                                                        +{schedule.numberOfStudents}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-gray-600">Course</p>
                                            <p className="text-xl font-semibold">{schedule.course}</p>
                                            <div className="my-5">
                                                <p className="text-gray-600">Lecture</p>
                                                <p className="font-semibold">{schedule.lecture}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-600">Room</p>
                                                <p className="font-semibold">{schedule.room}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-gray-600">Teacher</p>
                                            <p className="text-xl font-semibold">{schedule.teacher}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

