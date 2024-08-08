import { CustomResponse } from "../utils/custom-response";
import { Person } from "./person";

export abstract class IPersonRepository {

    abstract getPersons(): Promise<CustomResponse<Person[]>>

}