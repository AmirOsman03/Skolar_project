export interface Schedule {
    id: number;
    date: string;
    from: string;
    to: string;
    course: string;
    lecture: string;
    teacher: string;
    room: string;
    numberOfStudents: number;
    status: "upcoming" | "pending" | "past";
}