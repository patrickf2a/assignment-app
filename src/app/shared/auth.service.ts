import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  logIn(){
    this.loggedIn = true;
  }

  logOut(){
    // si false on peut rien faire pour edit
    this.loggedIn = false;
    //this.loggedIn = true;
  }

  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve,reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 100);
      });
      return isUserAdmin;
  }


  constructor() { }
}
