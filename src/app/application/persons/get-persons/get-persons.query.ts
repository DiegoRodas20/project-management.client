import { UseCasePromise } from "app/application/base/use-case-promise.base";
import { Person } from "app/domain/persons/person";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class GetPersonsQuery implements UseCasePromise<null, Person[]> {

    abstract execute(): Promise<CustomResponse<Person[]>>

}