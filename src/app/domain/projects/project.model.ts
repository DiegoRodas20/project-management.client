import { Comment } from "../utils/comment.model";
import { User } from "../utils/user.model";

export interface Project {
    id: number;
    externalId: number;
    areaPath: string;
    teamProject: string;
    iterationPath: string;
    state: string;
    reason: string;
    createdDate: string;
    title: string;
    description: string;
    priority: number;
    valueArea: string;
    risk: string;
    businessValue: number;
    timeCriticality: number;
    effort: number;
    startDate: string;
    targetDate: string;
    url: string;
    pageUrl: string;
    tags: string;
    assignedTo: User;
    comments: Comment[];
}