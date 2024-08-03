export interface WorkItem {
    id: number;
    externalId: number;
    workItemType: string;
    title: string;
    state: string;
    valueArea: string;
    tags: string;
    items: WorkItem[];
    pageUrl: string;
}