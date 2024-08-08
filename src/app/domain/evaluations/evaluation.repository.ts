import { CustomResponse } from "../utils/custom-response";
import { Evaluation } from "./evaluation";
import { SaveEvaluationRequest } from "./save-evaluation.request";

export abstract class IEvaluationRepository {

    abstract getByPersonId(personId: number): Promise<CustomResponse<Evaluation[]>>

    abstract getCurrentByPersonId(personId: number): Promise<CustomResponse<Evaluation>>

    abstract save(evaluation: SaveEvaluationRequest): Promise<CustomResponse<string>>
    
    abstract close(personId: number): Promise<CustomResponse<string>>
}