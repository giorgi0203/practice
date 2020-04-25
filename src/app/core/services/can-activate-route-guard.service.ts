import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';

@Injectable()
export class CanActivateRouteGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isSuerAuthincated()) {
      console.log(route);
      
      return true;
    } else {
      this.router.navigate(["/app/login"]);
      return false;
    }

  }
}
