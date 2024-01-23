import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Login/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./Login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class  AppRoutingModule {}
