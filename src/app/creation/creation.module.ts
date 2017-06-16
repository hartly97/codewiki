import { CreationComponent } from './creation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationSnippetComponent } from './creation-snippet/creation-snippet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CreationComponent, 
    CreationSnippetComponent,   
    ],
  exports: [
    CreationComponent
  ]
})
export class CreationModule { }
