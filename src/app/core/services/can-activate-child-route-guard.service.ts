import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';

@Injectable()
export class CanActivateChildRouteGuardService implements CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isSuerAuthincated()) {
      
      return true;
    } else {
      this.router.navigate(["/app/login"]);
      return false;
    }
  }
}
