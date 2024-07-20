import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { HeaderComponent } from './layout/components/header/header.componet';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';

const COMPONENTS = [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ProjectsComponent,
    InvoicesComponent,
    TasksComponent
];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AdminRoutingModule
    ],
    providers: [],
})
export class AdminModule { }