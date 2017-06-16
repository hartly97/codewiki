import { FormsModule } from '@angular/forms';
import { SnippetsComponent } from './snippets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetSearchComponent } from './snippet-search/snippet-search.component';
import { SnippetListComponent } from './snippet-list/snippet-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SnippetsComponent,
    SnippetSearchComponent,
    SnippetListComponent
  ],
  exports:[
    SnippetsComponent,
    SnippetSearchComponent,
    SnippetListComponent
  ]
})
export class SnippetsModule { }
