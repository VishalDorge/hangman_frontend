import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  registrationError = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(5)]]
    }, { validators: this.passwordMatchValidator })
  }

  handleSubmitForm = () => {
    if (this.registerForm.valid) {
      const {confirmPassword, ...user} = this.registerForm.value;
      this.authService.register(user)
        .subscribe((response: any) => {
          if (response.data) {
            this.router.navigate(["/auth/login"]);
          }
        }, (error: any) => {
          this.registrationError = true;
          console.log("Unable to register")
        });
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
    if (passwordControl?.value !== confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    } else confirmPasswordControl?.setErrors(null);
  }
}
