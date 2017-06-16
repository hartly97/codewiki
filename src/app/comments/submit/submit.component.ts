import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CommentService} from '../../shared/services/comment.service';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Comment, User} from '../../shared/model/comment';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'submit-comment',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Input() user: User;
  @Output() submitComment = new EventEmitter();

  // initialize comment
  comment: Comment;
  commentForm: FormGroup;
  submitted = false;

  constructor(
    private commentService: CommentService,
    private fb: FormBuilder
  ) { 
    this.createForm(); 
  }


  ngOnInit() {
    
  }

  // creates and initialize a form
  createForm() {
    this.commentForm = this.fb.group({
      text: '',
      user: '',  
      upvotes: 0, // number
      date:'DD/MM/YY' // string for piping later 
    });
  }
  
  onSubmit() {
    // obtain cached data for user
    if (!this.user) {
      alert("you need to login to comment!");
    }

    this.submitComment.emit(this.commentForm.value);
  }

}
