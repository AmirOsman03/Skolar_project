export type UserRole = 'student' | 'professor' | 'admin';

export interface User {
    id: string;
    name: string;
    surname: string;
    studyYear: number | null;
    earnedCredits: number | null;
    major: string | null;
    role: UserRole;
}