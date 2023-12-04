import { Component } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private githubService: GithubService){
    this.githubService.getUser();
  }
}

