import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    url: string = "";
    constructor() { }

    ngOnInit() {
        var params = {
            "ds0.personid": 3
        };
        var paramsAsString = JSON.stringify(params);
        var encodedParams = encodeURIComponent(paramsAsString)
        this.url = `https://lookerstudio.google.com/embed/reporting/c2ed55a1-a524-453c-93ae-2d9687422a53/page/iC47D?params=${encodedParams}`
    }
}