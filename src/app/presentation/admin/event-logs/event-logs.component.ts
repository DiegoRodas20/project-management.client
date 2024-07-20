import { Component, OnInit } from "@angular/core";
import { GetEventLogsQuery } from "app/application/utils/get-event-logs/get-event-logs.query";
import { EventLog } from "app/domain/utils/event-log.model";

@Component({
    selector: 'app-event-logs',
    templateUrl: 'event-logs.component.html',
    styleUrls: ['./event-logs.component.scss']
})

export class EventLogsComponent implements OnInit {

    eventLogs !: EventLog[]

    constructor(
        private _getEventLogsQuery: GetEventLogsQuery
    ) { }

    ngOnInit() { 
        this.getEventLogs()
    }

    public async getEventLogs(){

        this.eventLogs = (await this._getEventLogsQuery.execute()).data

        console.log(this.eventLogs)
    }
}