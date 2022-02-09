import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  register: boolean;
  successMessage: string;
  errors: String[];

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  onSubmit(){

    this.authService
    .tryLogin(this.username, this.password)
    .subscribe(response => {
      const access_token = JSON.stringify(response);
      localStorage.setItem('access_token', access_token)
      this.router.navigate(['/home'])
    }, errorResponse => {
      this.errors = ['Invalid username or incorrect password']
    })
      
    
    this.router.navigate(['/home'])
  }

  preparedRegister(event){
    event.preventDefault() 
    this.register = true
  }

  cancelRegister(){
      this.register = false
  }

  registry(){
    const user: User = new User()
    user.username = this.username
    user.password = this.password
      this.authService
        .saveUser(user)
        .subscribe(response => {
          this.successMessage = "Successful registration, please login"
          this.register = false;
          this.username = '';
          this.password = '';
          this.errors = [];
        }, errorResponse => {
          this.successMessage = null
          this.errors = errorResponse.error.errors;
          
          
        });
        
  }

}
