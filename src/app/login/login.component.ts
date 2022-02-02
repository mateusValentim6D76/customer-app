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

  username: string
  password: string
  loginError: boolean
  register: boolean
  successMessage: string
  constructor(private router: Router, private authService: AuthService) { }

  onSubmit(){
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
          this.loginError = false
        }, error => {
          this.loginError = true
          this.successMessage = null
        });
        
  }

}
