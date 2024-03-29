import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResData } from './auth.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  signupForm!: FormGroup;
  loginForm!: FormGroup;
  token!: string;
  error!: string;
  success!: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwords: new FormGroup({
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        confirmpassword: new FormControl(null, Validators.required)
      }, this.passwordCheck)
    })
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSignup() {
    this.authService.signup({
      'email': this.signupForm.get('email').value,
      'username': this.signupForm.get('username').value,
      'name': this.signupForm.get('name').value,
      'password': this.signupForm.get('passwords.password').value
    }).subscribe(
      (data: AuthResData) => {
        this.isLoginMode = true;
        this.success = "Signup was successfull";

      }, (errorRes) => {
        this.error = errorRes;
      }
    )
    this.loginForm.reset();
  }
  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(
      (data: AuthResData) => {
        this.token = data.token
        this.router.navigate(['/profile']);
        this.loginForm.reset();
      }, (errorRes) => {
        this.error = errorRes;
      }
    )
  }

  passwordCheck(control: FormGroup): { [s: string]: boolean } {
    if (control.get('password').value != control.get('confirmpassword').value) {
      return { 'notsame': true }
    }
    return null;
  }

}
