import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(public autService:AuthenticationService,
              public router:Router) { }
  
  loginUsername:string;
  loginPassword:string;
  isAuthenticated:boolean = false;
  tried:boolean=false;

  handleLogin(){
    this.tried=true;
    this.autService.authenticate(this.loginUsername, this.loginPassword);
    this.isAuthenticated=this.autService.isSessionAuthenticated();
    if(this.isAuthenticated){
      this.router.navigate(['volunteer']);
    }
  }

  ngOnInit(): void {
  }

}
