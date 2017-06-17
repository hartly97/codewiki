import { CommentsModule } from './../comments/comments.module';
import { ROUTES } from './../app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SnippetsComponent } from './snippets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetSearchComponent } from './snippet-search/snippet-search.component';
import { SnippetListComponent } from './snippet-list/snippet-list.component';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import { PrismComponent } from 'angular-prism';
import { SnippetDetailComponent } from './snippet-detail/snippet-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    CommentsModule
  ],
  declarations: [
    SnippetsComponent,
    SnippetSearchComponent,
    SnippetListComponent,
    PrismComponent,
    SnippetDetailComponent
  ],
  exports: [
    SnippetsComponent,
    SnippetSearchComponent,
    SnippetListComponent,
    PrismComponent,
    SnippetDetailComponent
  ]
})
export class SnippetsModule { }
