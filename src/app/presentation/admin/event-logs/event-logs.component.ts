import { Component, OnInit } from "@angular/core";
import { GetEventsLogsQuery } from "app/application/utils/get-events-logs/get-events-logs.query";
import { EventLog } from "app/domain/utils/event-log";

@Component({
    selector: 'app-event-logs',
    templateUrl: 'event-logs.component.html',
    styleUrls: ['./event-logs.component.scss']
})

export class EventLogsComponent implements OnInit {

    eventLogs !: EventLog[]

    constructor(
        private _getEventLogsQuery: GetEventsLogsQuery
    ) { }

    ngOnInit() { 
        this.getEventLogs()
    }

    public async getEventLogs(){

        this.eventLogs = (await this._getEventLogsQuery.execute()).data

        console.log(this.eventLogs)
    }
}