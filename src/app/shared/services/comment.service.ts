import { Comment } from './../model/comment';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class CommentService {

  comments: string = '/comments'
  comments$: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase) { }


  getComments():FirebaseListObservable<any>{
    return this.db.list(this.comments);
  }

  pushComment(comment:Comment){
    this.db.list(this.comments).push(comment);
  }

  ngOnInit(){
    //this.comment$ = this.db.list('/comments');  
  }

}