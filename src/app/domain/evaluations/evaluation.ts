import { Person } from "../persons/person";

export class Evaluation {
    id: number;
    date: Date;
    createdDate: Date;
    updatedDate: Date;
    score: number;
    person: Person;
    skillsToImprove: string;
    skillsReached: string;
    isClosed: boolean;
    constructor(
        id: number,
        date: Date,
        createdDate: Date,
        updatedDate: Date,
        score: number,
        person: Person,
        skillsToImprove: string,
        skillsReached: string,
        isClosed: boolean
    ) {
        this.id = id
        this.date = date
        this.createdDate = createdDate
        this.updatedDate = updatedDate
        this.score = score
        this.person = person
        this.skillsToImprove = skillsToImprove
        this.skillsReached = skillsReached
        this.isClosed = isClosed
    }
}