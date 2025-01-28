import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const route: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../Login/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: 'two-factor',
    loadComponent: () =>
      import('../Login/two-factor/two-factor.component').then(
        (m) => m.TwoFactorComponent
      ),
  },
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
