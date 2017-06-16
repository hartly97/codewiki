import { User } from './../../shared/model/user';
import { AuthService } from './../../shared/services/auth.service';
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
  user:User;
  
  tags:string[]=[];
  
  constructor(
    private auth: AuthService,
    private snippetService: SnippetService,
    private fb: FormBuilder
  ) { this.createForm();}

  ngOnInit() {
    this.getLoggedInUser();
    this.auth.watchForAuthChanges(() => this.getLoggedInUser());
    this.snippet = new Snippet (
      'Cool new snippet',
      '*ngFor="let a of abc"',
      'ianbrekelmans',
      'angularjs',
      ['ng4','ng2','mehtod','for loop'],
      'Beginner',
      'Need to know',
      'https://pbs.twimg.com/profile_images/3005141692/dc8e1eb36b6cbd2b5726f63c50adf7f2.png'
    );
  }

  getLoggedInUser() {
    if (this.auth.isLoggedIn) this.user = this.auth.getUser();
    else this.user = null;
  }


  createForm() {
    this.snippetForm = this.fb.group({
      //name: ['', Validators.required ],
      name: '',
      code: '',
      description:'',
      username: '',
      language: 'Select language',
      tags:[],
      difficulty:'Select difficulty',
      type:'Select type',
      imgUrl:''
    });
  }

  addTag(tag){
    this.tags.push(tag);
    //console.log(this.tags);
  }

  save(){
    const formModel = this.snippetForm.value;

    this.snippet.name = formModel.name;
    this.snippet.code = formModel.code;
    this.snippet.difficulty = formModel.difficulty;
    this.snippet.type = formModel.type;
    this.snippet.username = this.user.name;
    this.snippet.tags = this.tags;

    this.snippetService.pushSnippet(this.snippet);
  }  

}
