import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventLogsComponent } from './event-logs/event-logs.component';
import { HeaderComponent } from './layout/components/header/header.componet';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateProjectComponent } from './projects/components/create-project/create-project.component';
import { EditProjectComponent } from './projects/components/edit-project/edit-project.component';
import { GenerateInvoiceComponent } from './projects/components/generate-invoice/generate-invoice.component';
import { WorkItemsComponent } from './projects/components/work-items/work-items.component';
import { ProjectsComponent } from './projects/projects.component';
import { SafePipe } from '@shared/pipes/safe.pipe';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { GenerateEvaluationComponent } from './evaluation/components/generate-evaluation/generate-evaluation.component';
import { ListEvaluationComponent } from './evaluation/components/list-evaluation/list-evaluation.component';

const COMPONENTS = [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ProjectsComponent,
    EventLogsComponent,
    CreateProjectComponent,
    EditProjectComponent,
    GenerateInvoiceComponent,
    WorkItemsComponent,
    EvaluationComponent
];

@NgModule({
    declarations: [COMPONENTS, SafePipe, GenerateEvaluationComponent, ListEvaluationComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AdminRoutingModule,
    ],
    providers: [],
})
export class AdminModule { }