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
    apiKey: "AIzaSyAkv1EII31rtwpY8JzMl4_ySwTqTrx-LoE",
    authDomain: "code-wiki-141e7.firebaseapp.com",
    databaseURL: "https://code-wiki-141e7.firebaseio.com",
    projectId: "code-wiki-141e7",
    storageBucket: "code-wiki-141e7.appspot.com",
    messagingSenderId: "97932018205"
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
