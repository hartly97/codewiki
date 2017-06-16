import { Snippet, Language } from './../../shared/model/snippet';
import { SnippetService } from './../../shared/services/snippet.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cwiki-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {
  snippet: Snippet;

  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
    this.snippet = new Snippet (
      'Cool new snippet',
      '*ngFor="let a of abc"',
      'ianbrekelmans', 
      [
        new Language('angular',['2','4']),
        new Language('html',['5']),
        new Language('js',['5','6'])
      ],
      ['ng4','ng2','mehtod','for loop'],
      'Beginner',
      'Need to know'
    );
  }

  onSave(){
    this.snippetService.pushSnippet(this.snippet);

  }

}
