import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from './user.authenticate.service';

@Component({
  templateUrl: `./user.login.component.html`,
  styles : ['em{float:right; color: #E05c65; padding-left-10px;}']
})
export class UserLoginComponent {

  constructor(private router: Router, private authenticationserrvice: UserAuthenticationService)
  {

  }
  login(loginForm)
  {
    this.authenticationserrvice.login(loginForm);
    this.router.navigate(['/user/profile'])

  }
}