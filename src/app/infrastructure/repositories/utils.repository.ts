import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UTILS_URL } from "@shared/constants/url.constants";
import { CustomResponse } from "app/domain/utils/custom-response";
import { EventLog } from "app/domain/utils/event-log";
import { IUtilsRepository } from "app/domain/utils/utils.repository";
import { lastValueFrom } from "rxjs";

@Injectable()
export class UtilsRepository implements IUtilsRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getEventsLogs(): Promise<CustomResponse<EventLog[]>> {

        return lastValueFrom(this._httpClient.get<CustomResponse<EventLog[]>>(`${UTILS_URL}/100`))
    }
}