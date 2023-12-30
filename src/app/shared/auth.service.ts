import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { User } from '../assignments/User.model';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: boolean | null = null;
  url= "http://localhost:8010/api/user/authenticate";

  user!:User;
  admin=false;

  /*
  users = [
      { username: 'user', password: 'pass', role: 'user' },
      { username: 'admin', password: 'pass', role: 'admin' },
    ];
*/
  /*

    isLogged(username: string, password: string) {
      const user = this.getUser(username, password);
      if(user) {
        this.loggedInUser = user;
        return true;
      }
      return false;
    }
*/

  private handleError(error: HttpErrorResponse) {
    // Gérer l'erreur ici
    return throwError(error);
  }

  LogIn(userResponse: any) {
    this.user = userResponse.user;
    this.loggedInUser = true;
    this.admin = this.user.isadmin;
    console.log("admin service", this.admin);
    console.log("login service", this.loggedInUser);
  }


  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, { nom: username, motdepasse: password }).pipe(
      tap(response => {
        if (response.success) {
          this.LogIn(response);
        }
      }),
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  isAdmin() {
    return this.admin;
  }

  logout() {
    this.loggedInUser = null;
    console.log("deconnecter avec succes")
  }


  /*

  isLogged(username: string, password: string): boolean {
    if (this.login(username, password)!==undefined) {
      this.login(username, password).subscribe(
        (user) => {
          console.log(user);
          this.loggedInUser = user;
          console.log('connecter avec succes ');
        })
        return true;
    }
        return false;
        console.log('connexion echouer');
        //console.log(error);
    }


*/

    /*
    const user = this.getUser(username, password);
    if(user) {
      this.loggedInUser = user;
      return true;
    }
    return false;

  }
*/

/*
    getUser(username: string, password: string) {
      return this.users.find(
        user => user.username === username && user.password === password
      );
    }

*/
/*
    isAdmin() {
      if (this.loggedInUser) {
        return this.loggedInUser.isadmin === 'admin';
      }
      return false;
    }

/*

    logout() {
      this.loggedInUser = null;
      console.log("deconnecter avec succes")
    }

    getUser(username: string, password: string): Observable<User[]> {
      return this.http.get<User[]>(this.url);
}


  getUserRole(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/${username}/isadmin`);
    }

    /*
  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve,reject)=>{
        resolve(this.loggedInUser)
      }
    );
    return isUserAdmin;
  }
*/

  constructor(private http: HttpClient) { }
}
