import { SnippetService } from './shared/services/snippet.service';
import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { User } from './shared/model/user';

@Component({
  selector: 'cwiki-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  auth$;

  constructor(private auth: AuthService, private snippetService: SnippetService) {}

  ngOnInit() {
    this.getLoggedInUser();
    this.auth.watchForAuthChanges(() => this.getLoggedInUser());
  }

  deleteSnippets(){
    this.snippetService.deleteSnippets()
  }

  getLoggedInUser() {
    if (this.auth.isLoggedIn) this.user = this.auth.getUser();
    else this.user = null;

    console.log('app component user test:', this.user);
  }

  // firebase login
  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
