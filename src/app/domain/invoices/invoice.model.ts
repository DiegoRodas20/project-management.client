export interface Invoice {
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
    createdDate: string;
    updatedDate: string;
}