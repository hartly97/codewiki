import { Component, Input, Output } from '@angular/core';
import {AngularFireDatabase, 
        FirebaseListObservable
      } from 'angularfire2/database';
import {Comment, Mcomment} from '../shared/model/comment';
import {CommentCardComponent} from './comment-card/comment-card.component';
import {SubmitComponent } from './submit/submit.component';
import {CommentService} from '../shared/services/comment.service';
import {CommentListComponent } from './comment-list/comment-list.component';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'cwiki-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{
  user;
  comments:Comment;
  tComment;  // this is the targeted comment to pass onto comment-card

  // data for testing
  // comments = [
  //   { text:"This is awesome!!!",
  //   user: {name:"Steve Jobs", email: "steve@apple.com"},  // this could be a github ID, or object, depending on how we design later
  //   upvotes: 100, 
  //   date: "06/16/2017"},
  //   { text:"I agree!!!",
  //   user: {name: "Steve Wozniak", email:"therealsteve@apple.com"},  // this could be a github ID, or object, depending on how we design later
  //   upvotes: 200, 
  //   date: "06/16/2017"},
  //   { text:"this is mindblowing",
  //   user: {name:"Tim Cook", email:"tim@apple.com"},  // this could be a github ID, or object, depending on how we design later
  //   upvotes: 2, 
  //   date: "06/16/2017"}
  // ] 

  // this is for grabing data from firebase
  // comments: FirebaseListObservable<Comment[]>; // grab the comments array from firebase

   constructor(
     private commentService: CommentService,
     private auth: AuthService
  ){}

  ngOnInit(){

    // obtain logged in user information 
    this.user = this.getLoggedInUser();
     console.log('comments component user test:', this.user);
     
    this.commentService.getComments()
      .subscribe(comments => {
        this.comments = comments;
        console.log(this.comments);
      });
    console.log(this.comments);
  }

  getLoggedInUser() {
    if (this.auth.isLoggedIn) this.user = this.auth.getUser();
    else this.user = null;

    console.log('comments component auth test:', this.auth.isLoggedIn);
  }

  getCommentByUser(comments,tUser){

    let found = false;
    let counter = 0; // this is the counter for keeping track of users search
    while (found == false){
      if (comments.user == tUser){
        this.tComment = comments(counter);
        found = true;

        return this.tComment;
      }else{
        counter ++;
      }
    }
  }

  // this one will return an array of comments with all upvotes --> deal with later
  getCommentByUpvote(comments,upvote){

  }

  getCommentByDate(){
  }

  onParentCommentSubmitted(event) {
    // we will create a top level comment
    this.commentService.pushComment(event);
  }
  
}
