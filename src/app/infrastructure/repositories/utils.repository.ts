import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EVENTS_URL } from "@shared/constants/url.constants";
import { EventLog } from "app/domain/utils/event-log.model";
import { Response } from "app/domain/utils/response.model";
import { IUtilsRepository } from "app/domain/utils/utils.repository";
import { lastValueFrom } from "rxjs";

@Injectable()
export class UtilsRepository implements IUtilsRepository {

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getEventsLog(): Promise<Response<EventLog[]>> {

        return lastValueFrom(this._httpClient.get<Response<EventLog[]>>(EVENTS_URL))
    }
}