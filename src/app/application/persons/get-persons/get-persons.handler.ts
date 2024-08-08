import { Injectable } from "@angular/core"
import { CustomResponse } from "app/domain/utils/custom-response"
import { GetPersonsQuery } from "./get-persons.query"
import { Person } from "app/domain/persons/person"
import { IPersonRepository } from "app/domain/persons/person.repository"

@Injectable()
export class GetPersonsHandler implements GetPersonsQuery {

    constructor(
        private _personRepository: IPersonRepository
    ) { }

    public execute(): Promise<CustomResponse<Person[]>> {

        const result = this._personRepository.getPersons()

        return result
    }

}