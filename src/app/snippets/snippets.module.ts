import { SnippetsComponent } from './snippets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SnippetsComponent
  ],
  exports:[
    SnippetsComponent
  ]
})
export class SnippetsModule { }
