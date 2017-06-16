import { SnippetService } from './../../shared/services/snippet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cwiki-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  constructor(private snippetService: SnippetService) { }

  ngOnInit() {
  }

  onSave(){
    this.snippetService.pushSnippet();

  }

}
