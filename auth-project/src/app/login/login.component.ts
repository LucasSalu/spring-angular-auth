import { LoginRequest } from './../entities/loginRequest';
import { User } from './../entities/user';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  auth = new FormGroup({
  login: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required)
  });

  loginRequest: any;
  constructor(private loginService:LoginService, private router:Router){

  }

  onSubmit() {
    this.loginRequest = {
      login: this.auth.value.login,
      password: this.auth.value.password,
    };

    this.loginService.login(this.loginRequest).subscribe({
      next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('id', response.id);
          this.router.navigate(['index']);
          console.log(response.token);
      },
      error: (err) => {
          alert("Error");
      }
  });
    console.warn(this.auth.value);
  }
}
