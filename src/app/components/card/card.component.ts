import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { githubUser } from 'src/app/models/githubUser';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

   githubUser$?: githubUser = {
    name: "",
    login: "",
    avatar_url: "",
    bio: ""
  }

  constructor(private githubService: GithubService){
    this.searchUser("jonaswillian97");
  }
  
  searchUser(search: string){
    this.githubService.getUser(search).subscribe({
      next: (res) => {
        this.githubUser$ = {
          name: res.name,
          login: res.login,
          avatar_url: res.avatar_url,
          bio: res.bio
        }
      }
    });

  }
}

