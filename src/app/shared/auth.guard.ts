import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  let authService=inject(AuthService);
  let router=inject(Router);

  // si c'est true on peut accéder à la route
  return authService.isAdmin().
  then( (authentifie) => {
    if(authentifie){
      console.log("Vous etes en admin donc authentifié en navigation libre");
      return true;
    }
    else {
      console.log("Vous n'etes pas en admin donc pas authentifié en navigation libre");
      //on redirige vers la page de login
      router.navigate(["/home"]);
      return false;
    }
  })
};
