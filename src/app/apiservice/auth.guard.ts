
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private service: ApiService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('token')!== null){
      return true;
    }
    else{
      this.router.navigate(['/login'], {queryParams : {returnUrl: state.url}});
      return false;
    }
  }

}
  
