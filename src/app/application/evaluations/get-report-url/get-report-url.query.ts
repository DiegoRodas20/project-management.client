import { UseCase } from "app/application/base/use-case.base";
import { CustomResponse } from "app/domain/utils/custom-response";

export abstract class GetReportURLQuery implements UseCase<number, string> {

    abstract execute(params: number): CustomResponse<string> 

}