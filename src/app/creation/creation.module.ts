import { CreationComponent } from './creation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreationComponent],
  exports: [
    CreationComponent
  ]
})
export class CreationModule { }
