import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

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

}
