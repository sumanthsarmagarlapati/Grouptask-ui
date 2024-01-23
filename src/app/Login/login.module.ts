import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginRoutingModule } from "./login-routing.module";
import { TwoFactorComponent } from "./two-factor/two-factor.component";
import { ToastrService } from "ngx-toastr";


@NgModule({
  declarations: [LoginPageComponent, TwoFactorComponent],
  imports: [LoginRoutingModule,SharedModule],
  providers:[ToastrService]
})
export class LoginModule {}
