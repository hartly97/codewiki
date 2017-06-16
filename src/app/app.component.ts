import { SnippetService } from './shared/services/snippet.service';
import { Component } from '@angular/core';

@Component({
  selector: 'cwiki-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private snippetService: SnippetService){
  }
  
  deleteSnippets(){
    this.snippetService.deleteSnippets()
  }
}
