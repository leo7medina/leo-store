import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    console.log(email);
    // return this.angularFireAuth.signInWithEmailAndPassword(email, password);
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('result', result);
    }).catch((error) => console.log('Error', error));
  }

  logout() {
    return this.angularFireAuth.signOut();
  }

  createUser(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  hasUser() {
    return this.angularFireAuth.authState;
  }
}
