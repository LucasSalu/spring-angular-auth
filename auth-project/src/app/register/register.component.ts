import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    profileForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('ADMIN')
    });

    constructor(private loginService: LoginService) {}

    onSubmit() {
      const registerRequest = this.profileForm.value; // Captura os valores do formulário
      this.loginService.register(registerRequest).subscribe({
        next: (response) => {
          alert('Usuário registrado com sucesso:');
        },
        error: (err) => {
          console.error('Erro ao registrar usuário:', err);
          // Exiba uma mensagem de erro
        }
      });
    }
}
