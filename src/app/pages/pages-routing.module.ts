import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";


const route:Routes=[
    {
        path:'dasboard',
        component:DashboardComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    }
]
@NgModule({
    imports:[RouterModule.forChild(route),SharedModule],
    exports:[RouterModule]
})
export class PagesRoutingModule{}