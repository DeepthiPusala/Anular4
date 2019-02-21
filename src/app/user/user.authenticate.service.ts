import { Injectable } from "@angular/core";
import { IUser } from './user.model';


@Injectable()

export class UserAuthenticationService{

    user:IUser;

    login(loginForm)
    {
      this.user = {

       password: loginForm.password,
       userName: loginForm.userName,
       firstName:'Virtusa',
       lastName:'Angular'

      }
    }

    isAuthenticated()
    {

        return!!this.user
    }


    updateuser(first:string,last:string)
    {
        this.user = {
            password:"test",
            userName: "test",
            firstName:first,
            lastName:last
        }

    }
   
}