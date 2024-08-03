import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { GetProjectByIdQuery } from "app/application/projects/get-project-by-id/get-project-by-id.query";
import { UpdateProjectCommand } from "app/application/projects/update-project/update-project.command";
import { GetUnassignedEpicsQuery } from "app/application/work-items/get-unassigned-epics/get-unassigned-epics.query";
import { UpdateProjectRequest } from "app/domain/projects/update-project.request";
import { GetUnassignedEpicResponse } from "app/domain/work-items/get-unassigned-epic.response";
import { DynamicDialogConfig } from "primeng/dynamicdialog";

@Component({
    selector: 'app-edit-project',
    templateUrl: 'edit-project.component.html',
    styleUrls: ['./edit-project.component.scss']
})

export class EditProjectComponent implements OnInit {

    formGroup!: FormGroup
    project: any
    epics: GetUnassignedEpicResponse[] = []
    selectedEpics!: GetUnassignedEpicResponse[]

    constructor(
        private _formBuilder: FormBuilder,
        private _getProjectById: GetProjectByIdQuery,
        private _updateProject: UpdateProjectCommand,
        private _dialogConfig: DynamicDialogConfig,
        private _getUnassignedEpics: GetUnassignedEpicsQuery,
    ) { }

    async ngOnInit() {
        this.createFormGroup()
        await this.getUnassignedEpics()
        this.getProjectById()
    }

    public createFormGroup() {
        this.formGroup = this._formBuilder.group({
            title: [null],
            description: [null]
        })
    }

    public async getProjectById() {

        const projectId: string = this._dialogConfig.data.projectId

        const result = await this._getProjectById.execute(projectId)

        console.log(result)
        this.formGroup.patchValue({
            title: result.data.title,
            description: result.data.description
        })

        this.selectedEpics = result.data.epics
        this.epics = [...this.epics, ...result.data.epics];
    }

    public async updateProject() {

        const form = this.formGroup.value

        const projectId: string = this._dialogConfig.data.projectId

        const epicsId = this.selectedEpics.map(epic => epic.id)

        const requestUpdate: UpdateProjectRequest = {
            title: form.title,
            description: form.description,
            epicIds: epicsId
        }

        const request: [string, UpdateProjectRequest] = [
            projectId,
            requestUpdate
        ]

        const result = await this._updateProject.execute(request)
    }

    public async getUnassignedEpics() {

        const result = await this._getUnassignedEpics.execute()

        this.epics = result.data;
    }
}