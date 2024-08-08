import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { APP_ROUTES } from "@shared/routes/app.routes";

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    constructor(
        private _router: Router
    ) { }

    ngOnInit() { }

    goHome(){
        this._router.navigate([APP_ROUTES.DASHBOARD])
    }

    goProjects(){
        this._router.navigate([APP_ROUTES.PROJECTS])
    }

    goEventLogs(){
        this._router.navigate([APP_ROUTES.EVENT_LOGS])
    }

    goEvaluation(){
        this._router.navigate([APP_ROUTES.EVALUATION])
    }
}