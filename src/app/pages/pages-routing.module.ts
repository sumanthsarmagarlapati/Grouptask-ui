import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from "./profile/profile.component";


const route:Routes=[
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'',
        redirectTo:'profile',
        pathMatch:'full'
    }
]
@NgModule({
    imports:[RouterModule.forChild(route),SharedModule],
    exports:[RouterModule]
})
export class PagesRoutingModule{}