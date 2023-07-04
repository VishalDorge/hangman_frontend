import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { roleNavigation } from '../../auth.data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  invalidCredentials: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    })
  }

  handleFormSubmit = () => {
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      .subscribe((response) => {
        if(response.data){

          const localStorageData = {
            "token": response.data.accessToken,
            "role": response.data.role
          }

          this.authService.populateLocalStorage(localStorageData);

          const userRole = response.data.role as keyof typeof roleNavigation;
          const route = roleNavigation[userRole];
          this.router.navigate([route]);
        }
      }, (error: any) => {
        this.invalidCredentials = true;
        console.log("Unable to Login!")
      })
    }
  }

}
