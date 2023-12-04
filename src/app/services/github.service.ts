import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseUrl: string = environments.githubApi;

  constructor(private http: HttpClient) {

   }

   getUser(){
    return this.http.get(`${this.baseUrl}`)
   }

}
