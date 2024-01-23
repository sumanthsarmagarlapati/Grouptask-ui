import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { TwoFactorComponent } from './two-factor/two-factor.component';

const route: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  { path: 'two-factor', component: TwoFactorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(route),SharedModule],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
