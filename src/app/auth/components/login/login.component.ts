import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { AuthResponse, AuthForm } from '@auth/store/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })

    if (this.authService.isSuerAuthincated()) {
      this.router.navigate(["/app"]);
    }

  }

  handleFormSubmit() {
    if (this.loginForm.valid) {
      this.authService.authenticate(new AuthForm(this.loginForm.value)).subscribe((response: AuthResponse) => {
        this.authService.saveToken(new AuthResponse(response));
        this.router.navigate(["/app"]);
      })
    }
  }

}
