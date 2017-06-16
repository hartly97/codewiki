import { SnippetService } from './shared/services/snippet.service';
import { SnippetsModule } from './snippets/snippets.module';
import { CommentsModule } from './comments/comments.module';
import { CreationModule } from './creation/creation.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/services/auth.service';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyA-TK4IScTdIG7Ei9xQnqcYIcNo5Gyv1xA",
    authDomain: "code-wiki-52411.firebaseapp.com",
    databaseURL: "https://code-wiki-52411.firebaseio.com",
    projectId: "code-wiki-52411",
    storageBucket: "",
    messagingSenderId: "291291039551"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CreationModule,
    CommentsModule,
    SnippetsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    SnippetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
