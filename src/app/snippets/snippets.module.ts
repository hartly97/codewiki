import { SnippetsComponent } from './snippets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import { PrismComponent } from 'angular-prism';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SnippetsComponent,
    PrismComponent
  ],
  exports: [
    SnippetsComponent
  ]
})
export class SnippetsModule { }
