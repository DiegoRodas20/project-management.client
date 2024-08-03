import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationModule } from '../application/application.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { PresentationComponent } from './presentation.component';
import { PresentationRoutingModule } from './presentation.routing';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
    declarations: [PresentationComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        PresentationRoutingModule,
        HttpClientModule,
        ApplicationModule,
        InfrastructureModule,
        AuthModule,
        AdminModule,
    ],
    providers: [DialogService],
    bootstrap: [PresentationComponent]
})

export class PresentationModule { }
