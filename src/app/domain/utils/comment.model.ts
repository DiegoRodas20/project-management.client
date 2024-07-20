import { User } from "./user.model";

export interface Comment {
    id: number;
    date: string;
    text: string;
    createdBy: User;
}