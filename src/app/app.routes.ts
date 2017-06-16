import { SnippetsComponent } from './snippets/snippets.component';
import { CommentsComponent } from './comments/comments.component';
import { CreationComponent } from './creation/creation.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [{
   path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', component: AppComponent 
  }, {
    path: 'creation', component: CreationComponent
  }, {
    path: 'comments', component: CommentsComponent
  }, {
    path: 'snippets', component: SnippetsComponent
  }
];
