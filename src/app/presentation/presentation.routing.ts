import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { APP_ROUTES } from "@shared/routes/app.routes"
import { APP_PATH } from "@shared/routes/path.routes"

const routes: Routes = [
    {
        path: APP_PATH.AUTH,
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: APP_PATH.ADMIN,
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '**',
        redirectTo: APP_ROUTES.DASHBOARD,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PresentationRoutingModule { }
