import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   //When we define public router: Router, Angular will create an object for Router class.
   loginForm: FormGroup;
   errorMessage: string;
 
 
   validationMessages = {
   
     email: [
       {
         type: 'required',
         message: ('Email field can`t blank')
       },
       {
         type: 'pattern',
         message: ('Please enter valid email.')
       }
     ],
    
     password: [
       {
         type: 'required',
         message: ('password field can`t blank')
       },
       {
         type: 'minLength',
         message: ('Password should be min in 6 words.')
       },
       {
         type: 'maxLength',
         message: ('Password should be not more than in 12 words.')
       },
       {
         type: 'pattern',
         message: ('Your password must start with one uppercase, one lowercase, and one number')
       }
     ],
  
   };
 
 
 
 
 
 
 
   //constructor(public router: Router) { }
 
   //ngOnInit() {
     // let userData = JSON.parse(localStorage.getItem("userData"));
     // let email = userData.email;
     // this.email = email;
   //}
   constructor(private fb: FormBuilder, public router: Router, public toastController: ToastController, public alertController: AlertController) { 
     this.loginForm = this.fb.group({
     
       email: [
         '',
         [
           Validators.required,
           Validators.email,
           Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
         ]
       ],
     
       password: ['', [
         Validators.required,
         Validators.minLength(6),
         Validators.maxLength(12), 
         Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
       ]],
       
     },
     // {validator: MustMatch('password', 'confirmPassword')}
     );
   }
 
   ngOnInit() {
   }
 
   async presentToast() {
     const toast = await this.toastController.create({
       message: 'Logged Successfully.',
       color: 'danger',
       duration: 2000
     });
     toast.present();
   }
   
//Login Method for Routing to home from login
login(){
  this.presentToast();
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

