import { SnippetDetailComponent } from './snippets/snippet-detail/snippet-detail.component';
import { SnippetSearchComponent } from './snippets/snippet-search/snippet-search.component';
import { HomeComponent } from './home/home.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { CommentsComponent } from './comments/comments.component';
import { CreationComponent } from './creation/creation.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [{
   path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', component: HomeComponent 
  }, {
    path: 'creation', component: CreationComponent
  }, {
    path: 'comments', component: CommentsComponent
  }, {
    path: 'search', component: SnippetSearchComponent
  },
    {
    path: 'snippet/:id', component: SnippetDetailComponent
  }
];
