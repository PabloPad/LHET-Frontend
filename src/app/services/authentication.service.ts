import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(user:string, pwd:string){
    if (user==="pablopad" && pwd==="1234567"){
      sessionStorage.setItem('authenticatedUser', user);
      console.log("user authenticated: "+sessionStorage.getItem("authenticatedUser"));
      return true;
    }
    else{
      return false;
    }
  }

  isSessionAuthenticated(){
    let user=sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }

  removeAuthentication(){
    sessionStorage.removeItem("authenticatedUser");
  }

}