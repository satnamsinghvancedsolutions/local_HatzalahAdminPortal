import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})

export class AuthGuard implements CanActivate{
  permissions:any;

  constructor(private authService: AuthService,
    private router: Router) {
      this.permissions =  this.authService.userInfo$.value.data.permissions;
    }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    if (this.authService.isLoggedIn()) {
         return true;
    } else {
      this.router.navigate(["/account/login"]);
      return false;
    }
  }
}

