import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PERSON_URL } from "@shared/constants/url.constants";
import { Person } from "app/domain/persons/person";
import { IPersonRepository } from "app/domain/persons/person.repository";
import { CustomResponse } from "app/domain/utils/custom-response";
import { lastValueFrom } from "rxjs";

@Injectable()
export class PersonRepository implements IPersonRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }
    public getPersons(): Promise<CustomResponse<Person[]>> {
        return lastValueFrom(this._httpClient.get<CustomResponse<Person[]>>(PERSON_URL))
    }
}