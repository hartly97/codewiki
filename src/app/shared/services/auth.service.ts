
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../model/user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {



  constructor(private afAuth: AngularFireAuth) {}

  getUser(): User {
    const currentUser = this.afAuth.auth.currentUser;


    return {
      id: currentUser.uid,
      avatar: currentUser.photoURL,
      name: currentUser.displayName,
      email: currentUser.email
    };
  }

  get isLoggedIn(): boolean {
    return this.afAuth.auth.currentUser ? true : false;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  watchForAuthChanges(func) {
    firebase.auth().onAuthStateChanged(func);
  }

}
