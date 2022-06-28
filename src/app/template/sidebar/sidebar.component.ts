import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loggedUser: String

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loggedUser = this.authService.getUserAuthenticated();
  }

  logout(){
    this.authService.endSession();
    this.router.navigate(['/login'])

  }

}
