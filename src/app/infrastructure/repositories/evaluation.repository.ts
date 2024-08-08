import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EVALUATION_URL } from "@shared/constants/url.constants";
import { Evaluation } from "app/domain/evaluations/evaluation";
import { IEvaluationRepository } from "app/domain/evaluations/evaluation.repository";
import { SaveEvaluationRequest } from "app/domain/evaluations/save-evaluation.request";
import { CustomResponse } from "app/domain/utils/custom-response";
import { lastValueFrom } from "rxjs";

@Injectable()
export class EvaluationRepository implements IEvaluationRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }
    getByPersonId(personId: number): Promise<CustomResponse<Evaluation[]>> {
        return lastValueFrom(this._httpClient.get<CustomResponse<Evaluation[]>>(`${EVALUATION_URL}/person/${personId}`))
    }
    getCurrentByPersonId(personId: number): Promise<CustomResponse<Evaluation>> {
        return lastValueFrom(this._httpClient.get<CustomResponse<Evaluation>>(`${EVALUATION_URL}/person/current/${personId}`))
    }
    save(evaluation: SaveEvaluationRequest): Promise<CustomResponse<string>> {
        return lastValueFrom(this._httpClient.post<CustomResponse<string>>(`${EVALUATION_URL}`, evaluation))
    }
    close(personId: number): Promise<CustomResponse<string>> {
        return lastValueFrom(this._httpClient.put<CustomResponse<string>>(`${EVALUATION_URL}/closed/person/${personId}`, {}))
    }

}