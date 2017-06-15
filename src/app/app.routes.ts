import { SnippetsComponent } from './snippets/snippets.component';
import { CommentsComponent } from './comments/comments.component';
import { CreationComponent } from './creation/creation.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [{
   path: '', redirectTo: 'cwiki-home', pathMatch: 'full'
  }, {
    path: 'ciwki-home', component: AppComponent 
  }, {
    path: 'cwiki-creation', component: CreationComponent
  }, {
    path: 'cwiki-comments', component: CommentsComponent
  }, {
    path: 'cwiki-snippets', component: SnippetsComponent
  }
];
