import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'bienvenida',loadChildren: ()=>import('./welcome/welcome.module').then(m=>m.WelcomeModule)
  },
  {
    path:'login',loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
