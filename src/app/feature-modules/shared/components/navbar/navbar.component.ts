import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/feature-modules/auth/auth.service';
import { rolesData } from 'src/app/utility/constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  token: string;
  role: string;
  constructor(private router: Router, private authService: AuthService){
    this.token = localStorage.getItem("token") as string;
    this.role = localStorage.getItem("role") as string;
  }

  logout = () => {
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }

  getLoginStatus = () => {
    if(this.token !== "") return true;
    else return false;
  }

  goToDashboard = () => {
    if(this.role === rolesData.ADMIN) this.router.navigate(["/admin"]);
  }

}
