import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
//Login Method for Routing to home from login
login(){
 
  this.router.navigate(['/tabs/tab1']);
}
//Register Method for Routing to login from register
register() {
this.router.navigate(['/register']);
}
//Forgot password Method for Routing to login from forgot password page
forgot_password(){
this.router.navigate(['/forgot-password']);
}
}
