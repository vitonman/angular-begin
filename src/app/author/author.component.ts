import { Component} from '@angular/core';
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent{

  title = "List of authors";
  authors;

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
  }
  // Logic for calling an HTTP service

  getTitle() {
    return this.title;
  }

}






