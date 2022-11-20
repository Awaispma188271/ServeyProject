
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServeyServiceService } from './sharedServices/servey-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private route: Router, private serveyServiceService: ServeyServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var authorization = this.serveyServiceService.isLoggin();
      if (authorization) {
        return true;
      } else {
        alert('Login is required');
        return this.route.navigate(['/AdminLogin']);
      }
      return authorization;
    }
  
  
}
