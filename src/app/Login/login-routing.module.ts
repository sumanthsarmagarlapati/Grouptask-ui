import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { TwoFactorComponent } from './two-factor/two-factor.component';

const route: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  { path: 'two-factor', component: TwoFactorComponent },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../pages/pages-routing.module').then((m) => m.PagesRoutingModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(route), SharedModule],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
