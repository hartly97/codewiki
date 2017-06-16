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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CreationModule,
    CommentsModule,
    SnippetsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
