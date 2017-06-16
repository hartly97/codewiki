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

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.getLoggedInUser();
    this.auth.watchForAuthChanges(() => this.getLoggedInUser());
  }

  getLoggedInUser() {
    if (this.auth.isLoggedIn) this.user = this.auth.getUser();
    else this.user = null;
  }

  // firebase login
  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
