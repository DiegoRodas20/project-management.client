import { Comment } from "../utils/comment.model";
import { User } from "../utils/user.model";

export interface Task {
    id: number;
    externalId: number;
    areaPath: string;
    teamProject: string;
    iterationPath: string;
    state: string;
    reason: string;
    title: string;
    description: string;
    priority: number;
    remainingWork: number;
    originalEstimate: number;
    completedWork: number;
    activity: string;
    url: string;
    pageUrl: string;
    assignedTo: User;
    comments: Comment[];
}