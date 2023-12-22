import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private authService: AuthorizationService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  loginSubmitted() {
    this.authService.loginUser(this.loginForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      err => {
        console.error(err);
      }
    );
  }
  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }

  ngOnInit(): void {}
}
