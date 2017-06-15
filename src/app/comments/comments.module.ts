import { CommentsComponent } from './comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommentsComponent],
  exports: [CommentsComponent]
})
export class CommentsModule { }
