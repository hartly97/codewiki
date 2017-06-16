import { User } from './../shared/model/user';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.getLoggedInUser();
    this.auth.watchForAuthChanges(() => this.getLoggedInUser());
  }

  getLoggedInUser() {
    if (this.auth.isLoggedIn) this.user = this.auth.getUser();
    else this.user = null;
  }

}
