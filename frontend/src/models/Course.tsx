import type {User} from "./User.tsx";

export interface Course {
    id: number;
    name: string;
    acronym: string;
    professor: User;
    progress: number;
    numberOfStudents: number;
}