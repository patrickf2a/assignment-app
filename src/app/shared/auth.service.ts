import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser:any;

  users = [
      { username: 'user', password: 'pass', role: 'user' },
      { username: 'admin', password: 'pass', role: 'admin' },
    ];


    isLogged(username: string, password: string) {
      const user = this.getUser(username, password);
      if(user) {
        this.loggedInUser = user;
        return true;
      }
      return false;
    }

    getUser(username: string, password: string) {
      return this.users.find(
        user => user.username === username && user.password === password
      );
    }

    isAdmin() {
      if (this.loggedInUser) {
        return this.loggedInUser.role === 'admin';
      }
      return false;
    }

    logout() {
      this.loggedInUser = null;
      console.log("deconnecter avec succes")
    }


  constructor() { }
}
