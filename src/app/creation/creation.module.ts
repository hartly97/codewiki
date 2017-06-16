import { CreationComponent } from './creation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationSnippetComponent } from './creation-snippet/creation-snippet.component';
import { CreationFormComponent } from './creation-form/creation-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CreationComponent, 
    CreationSnippetComponent, CreationFormComponent,   
    ],
  exports: [
    CreationComponent
  ]
})
export class CreationModule { }
