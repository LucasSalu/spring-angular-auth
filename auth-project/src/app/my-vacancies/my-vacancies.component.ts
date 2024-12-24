import { Component } from '@angular/core';
import { VacanciesService } from '../service/vacancies/vacancies.service';

@Component({
  selector: 'app-my-vacancies',
  templateUrl: './my-vacancies.component.html',
  styleUrls: ['./my-vacancies.component.css']
})
export class MyVacanciesComponent {


    list: any[] = [];
    isAdmin:boolean = false;

    status:string = '';
    title:string = '';
    description:string = '';
    requirements:string = '';
    id:any = '';

    constructor(private vacanciesService:VacanciesService){

    }

    ngOnInit() {
      this.isAdmin = 'admin' == localStorage.getItem('role')
      this.loadVacancies();
    }

    loadVacancies() {
      this.vacanciesService.getMyVacancies().subscribe({
        next: (data) => {
          this.list = data;
        },
        error: (err) => {
          console.error('Erro ao carregar vagas:', err);
        }
      });
    }

    setModal(status:any, title:any, description:any,requirements:any,  id:any){
      this.status = status;
      this.title = title;
      this.requirements = requirements;
      this.description = description;
      this.id = id;
    }

    deleteVacancy(vacancyId: number) {
      this.vacanciesService.deleteVacancy(vacancyId).subscribe({
        next: (data) => {
          console.log('Vaga deletada com sucesso');
          this.loadVacancies();  // Atualiza a lista após a exclusão
        },
        error: (error) => {
          console.error('Erro ao deletar vaga:', error);
        }
      });
    }

    updateOrCreate() {
      this.vacanciesService.updateOrCreate(this.id, this.title, this.description, this.requirements).subscribe({
        next: () => {
          console.log('Operação realizada com sucesso');
          this.loadVacancies(); // Atualiza a lista após a criação/edição
          this.resetForm(); // Reseta o formulário após salvar
        },
        error: (error) => {
          console.error('Erro ao criar/editar vaga:', error);
        }
      });
    }

    resetForm() {
      this.id = undefined;
      this.title = '';
      this.description = '';
      this.requirements = '';
    }

}
