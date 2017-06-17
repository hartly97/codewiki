import { Component, OnInit, Input } from '@angular/core';
import {Comment, Mcomment} from '../../shared/model/comment';
import {CommentCardComponent} from '../comment-card/comment-card.component';
import {User} from '../../shared/model/user';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comment;
  @Input() user:User;

  overallComment = {main:{text:"jkhcjsklcndsjk",
                       user:{id: "test",
                             name: "hello gello",
                             avatar: "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
                             email: "testing@gmail.com"},
                       upvotes: 0,
                       date: "1606"},
                    replies:[{text:"jkhcjsklcndsjk",
                              user:{id: "test",
                                    name: "hello gello2",
                                    avatar: "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
                                    email: "testing@gmail.com"},
                              upvotes: 0,
                              date: "1606"}, 
                              {text:"jkhcjsklcndsjk",
                                user:{id: "test",
                                      name: "hello gello3",
                                      avatar: "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
                                      email: "testing@gmail.com"},
                                upvotes: 0,
                                date: "1606"}]
                  };
  replyComments;
  mainComment;
  needReplyBox;
  
  constructor() { }

  ngOnInit() {
    // split comments into main comment and sub-comment
    //this.splitComment(this.overallComment);

    // load the comment 
    //console.log(this.replyComments);
    //console.log('comment-list component user test:', this.user);
  }

  splitComment(sComment: Mcomment){

    this.mainComment = sComment.main;
    this.replyComments = sComment.replies;
  }

  updateReply(){
    //this.needReplyBox = true;
  }

  onChildCommentSubmitted(event) {
    this.replyComments.push(event);
  }

}
