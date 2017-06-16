import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input() comment;

  constructor() { }

  ngOnInit() {
    // load the comment 
    console.log(this.comment);
  }

  // class to update upvotes
  updateUpvotes(){
    this.comment.upvotes++;
  }

}
