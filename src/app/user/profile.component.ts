import { Component, OnInit } from '@angular/core'
import{Router} from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{UserAuthenticationService} from './user.authenticate.service'


@Component({
  templateUrl: './profile.component.html'
  ,
  styles : ['em{float:right; color: #E05c65; padding-left-10px;}']
})
export class ProfileComponent implements OnInit {
  
  
  profileForm: FormGroup;
  constructor(private router: Router, private userauthenticateserive: UserAuthenticationService) { }

  ngOnInit() {
    let firstName = new FormControl(this.userauthenticateserive.user.firstName,Validators.required);
    let lastName = new FormControl(this.userauthenticateserive.user.lastName,Validators.required);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel()
{ this.router.navigate(['/courses']) }


updateuser(profileForm)
{
this.userauthenticateserive.updateuser(profileForm.firstName,profileForm.lastName)

}

}
