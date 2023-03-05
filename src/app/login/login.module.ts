import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';





@NgModule({
  declarations: [
    LoginPageComponent,
 
    
  
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
   
    
  ]
  
  
})
export class LoginModule { }
