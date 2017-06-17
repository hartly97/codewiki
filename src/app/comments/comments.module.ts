import { CommentsComponent } from './comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './submit/submit.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommentService} from '../shared/services/comment.service';
import { CommentListComponent } from './comment-list/comment-list.component';
import {AuthService} from '../shared/services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CommentsComponent, SubmitComponent, CommentCardComponent, CommentListComponent],
  exports: [CommentsComponent, SubmitComponent, CommentCardComponent, CommentListComponent],
  providers:[CommentService]
})
export class CommentsModule { 

  
}
