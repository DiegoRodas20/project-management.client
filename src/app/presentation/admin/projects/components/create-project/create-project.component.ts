import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CreateProjectCommand } from "app/application/projects/create-project/create-project.command";
import { GetUnassignedEpicsQuery } from "app/application/work-items/get-unassigned-epics/get-unassigned-epics.query";
import { CreateProjectRequest } from "app/domain/projects/create-project.request";
import { GetUnassignedEpicResponse } from "app/domain/work-items/get-unassigned-epic.response";

@Component({
    selector: 'app-create-project',
    templateUrl: 'create-project.component.html',
    styleUrls: ['./create-project.component.scss']
})

export class CreateProjectComponent implements OnInit {

    selectedEpics!: GetUnassignedEpicResponse[]
    epics: GetUnassignedEpicResponse[] = []
    formGroup!: FormGroup

    constructor(
        private _createProjectCommand: CreateProjectCommand,
        private _getUnassignedEpics: GetUnassignedEpicsQuery,
        private _formBuilder: FormBuilder
    ) { }

    async ngOnInit() {
        this.createFormGroup()
        this.getUnassignedEpics()
    }

    public createFormGroup() {
        this.formGroup = this._formBuilder.group({
            title: [null],
            description: [null]
        })
    }

    public async createProject() {

        const epicsId = this.selectedEpics.map(epic => epic.id)

        const form = this.formGroup.value

        const request: CreateProjectRequest = {
            title: form.title,
            description: form.description,
            epicIds: epicsId
        }

        const result = await this._createProjectCommand.execute(request)
    }

    public async getUnassignedEpics() {
        const result = await this._getUnassignedEpics.execute()

        this.epics = result.data
    }
}