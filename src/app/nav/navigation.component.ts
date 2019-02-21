import { Component } from '@angular/core';
import{UserAuthenticationService} from '../user/user.authenticate.service'

@Component({
  selector: 'navigation',
  templateUrl:'./navbar.component.html',
  styles:[`.nav.navbar-nav {font-size : 15px;},
  #searchForm {margin-right:100px;},
  @media (max-width : 1200px){#searchForm{dispaly:none}}
  li > a.active{color: orange;}`]
  
})
export class NavComponent {
 

  constructor(public authenticationserrvice: UserAuthenticationService)
  {}
}
