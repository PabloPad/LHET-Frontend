import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  
  constructor(private autService:AuthenticationService,
              private router:Router)
  { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.autService.isSessionAuthenticated()){
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }

  }
}
