import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async canActivate() {

    /*
    const isAdmin = await this.authService.isAdmin();
    if(isAdmin) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }

  }
*/
}
