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

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  constructor(private http: HttpClient) { }


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
}
