import { Component, OnInit } from "@angular/core";
import { GetProjectsQuery } from "app/application/projects/get-projects/get-projects.query";
import { Project } from "app/domain/projects/project.model";

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

    projects!: Project[];

    constructor(
        private _getProjectsQuery: GetProjectsQuery
    ) { }

    async ngOnInit() {
        this.getProjects()
    }

    private async getProjects() {
        this.projects = (await this._getProjectsQuery.execute()).data
    }
}