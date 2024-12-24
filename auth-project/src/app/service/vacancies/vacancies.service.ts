import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/enviroments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  baseUrl= API_PATH;
  constructor(private httpClient:HttpClient) { }

  getVacancies(): Observable<any> {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const loginUrl = `${this.baseUrl}/jobs`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Adicionando o token no cabeçalho
    });

    return this.httpClient.get<any>(loginUrl,{ headers });  // Passando um objeto vazio como corpo da requisição
  }

  getMyVacancies(): Observable<any> {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const loginUrl = `${this.baseUrl}/jobs/user/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Adicionando o token no cabeçalho
    });

    return this.httpClient.get<any>(loginUrl,{ headers });  // Passando um objeto vazio como corpo da requisição
  }

  getVacanciesAdm(): Observable<any> {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const loginUrl = `${this.baseUrl}/jobs/adm/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Adicionando o token no cabeçalho
    });

    return this.httpClient.get<any>(loginUrl,{ headers });  // Passando um objeto vazio como corpo da requisição
  }



  deleteVacancy(vacancyId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const deleteUrl = `${this.baseUrl}/jobs/${vacancyId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Adicionando o token no cabeçalho
    });

    return this.httpClient.delete<any>(deleteUrl, { headers });
  }

  applyToVacancie(vacancyId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const idUser = localStorage.getItem('id');

    const request = {
        'userId':idUser,
        'jobId':vacancyId,
        'applicationDate': new Date().toISOString(),
        'status': 'Pending'
    }

    const deleteUrl = `${this.baseUrl}/applications`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Adicionando o token no cabeçalho
    });

    return this.httpClient.post<any>(deleteUrl,request, { headers });
  }


  updateOrCreate(id: number | undefined, title: string, description: string, requirements: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });
    const createdBy = localStorage.getItem("id");
    const vacancy = { title, description, requirements };

    if (id) {
        // Atualiza vaga existente
        const updateUrl = `${this.baseUrl}/jobs/${id}`;
        return this.httpClient.put<any>(updateUrl, vacancy, { headers });
    } else {
          const vacancy = { title, description, requirements, createdBy, 'isActive' :true};
        // Cria nova vaga
        const createUrl = `${this.baseUrl}/jobs`;
        return this.httpClient.post<any>(createUrl, vacancy, { headers });
    }
}


}
