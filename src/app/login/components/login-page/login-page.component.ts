import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/compat/auth';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {
 
  username!: string;
  password!: string;
  user:any;

  constructor(private router: Router,private modalService: NgbModal,public auth:AngularFireAuth) {
    auth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  async login(loginForm:any) {
    try {
      await this.auth.signInWithEmailAndPassword(this.username, this.password);
      // Redirecionamiento cuando credenciales son correctas por medio de una inyeccion en el constructor de tipo Router
      this.router.navigate(['/bienvenida/',this.username]);
    } catch (e) {
      // Despligue de modal por medio de inyeccion en el constructor de tipo NgbModal
      this.modalService.open('Tu inicio de sesión ha fallado. Por favor, verifica tus credenciales e intenta nuevamente');
    }
  }



}
