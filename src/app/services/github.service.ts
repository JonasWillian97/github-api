import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { githubUser } from '../models/githubUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseUrl: string = environments.githubApi;

  constructor(private http: HttpClient) {

   }

   getUser(){
    return this.http.get<githubUser>(`${this.baseUrl}`)
   }

}
