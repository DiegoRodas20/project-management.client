
export interface GetProjectByIdResponse {

    id: number;
    title: string;
    description: string;
    epics: GetProjectByIdEpicsResponse[]
}

export interface GetProjectByIdEpicsResponse {
    
    id: number;
    externalId: number;
    title: string;
    pageUrl: string;
}