import { Component, OnInit } from "@angular/core";
import { GetProjectsQuery } from "app/application/projects/get-projects/get-projects.query";
import { Project } from "app/domain/projects/project";
import { DialogService } from "primeng/dynamicdialog";
import { CreateProjectComponent } from "./components/create-project/create-project.component";
import { EditProjectComponent } from "./components/edit-project/edit-project.component";
import { GenerateInvoiceComponent } from "./components/generate-invoice/generate-invoice.component";
import { WorkItemsComponent } from "./components/work-items/work-items.component";

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

    projects!: Project[];

    constructor(
        private _getProjectsQuery: GetProjectsQuery,
        private _dialogService: DialogService
    ) { }

    async ngOnInit() {
        this.getProjects()
    }

    public async getProjects() {
        this.projects = (await this._getProjectsQuery.execute()).data

        console.log(this.projects)
    }

    public createProject() {

        this._dialogService.open(CreateProjectComponent, {
            header: 'Crear Proyecto',
            width: '30vw',
            modal: true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        })
    }

    public editProject(projectId: string) {
        this._dialogService.open(EditProjectComponent, {
            data: { projectId: projectId },
            header: 'Editar Proyecto',
            width: '30vw',
            modal: true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        })
    }

    public generateInvoice(projectId: string) {
        this._dialogService.open(GenerateInvoiceComponent, {
            data: { projectId: projectId },
            header: 'Generar Factura',
            width: '30vw',
            modal: true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        })
    }

    public viewWorkItems(projectId: string){
        this._dialogService.open(WorkItemsComponent, {
            data: { projectId: projectId },
            header: 'Backlog',
            width: '50vw',
            modal: true,
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
        })
    }
}