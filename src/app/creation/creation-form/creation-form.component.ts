import { Snippet, Language } from './../../shared/model/snippet';
import { SnippetService } from './../../shared/services/snippet.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cwiki-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {
  snippet: Snippet;
  snippetForm: FormGroup;

  constructor(
    private snippetService: SnippetService,
    private fb: FormBuilder
  ) { this.createForm();}

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

  createForm() {
    this.snippetForm = this.fb.group({
      //name: ['', Validators.required ],
      name: '',
      code: '',
      username: '',
      language: new Language ('',[]),
      tags:[],
      difficulty:'',
      type:''
    });
  }

  onSubmit(){
    const formModel = this.snippetForm.value;

    this.snippet.name = formModel.name;
    this.snippet.code = formModel.code;
    this.snippet.difficulty = formModel.difficulty;
    this.snippet.type = formModel.type;

    this.snippetService.pushSnippet(this.snippet);
  }  

}
