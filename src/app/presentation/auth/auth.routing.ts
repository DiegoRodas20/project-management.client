import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AUTH_PATH } from "@shared/routes/path.routes";
import { LayoutComponent } from "./layout/layout.component";
import { SignInComponent } from "./sign-in/sign-in.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: AUTH_PATH.SIGN_IN,
                component: SignInComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class AuthRoutingModule { }
