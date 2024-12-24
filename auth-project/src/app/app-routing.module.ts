import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VacancyTableComponent } from './vacancy-table/vacancy-table.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { GuardsGuard } from './guards/guards.guard';
import { IndexGuard } from './guards/index.guard';
import { MyVacanciesComponent } from './my-vacancies/my-vacancies.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona para login
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuardsGuard] // Middleware para verificar acesso
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuardsGuard] // Middleware para verificar acesso
  },

  // Rotas protegidas para usuários autenticados
  {
    path: 'index',
    component: MainFrameComponent, // Layout principal após login
    canActivate: [IndexGuard], // Protege toda a rota
    children: [
      { path: 'vacancies', component: VacancyTableComponent },
      { path: 'my-vacancies', component: MyVacanciesComponent },
      { path: 'register', component: RegisterComponent } // Registro dentro do contexto autenticado
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
