import { Component, inject } from '@angular/core';
import { Constant } from '../../../constant';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {



  route = inject(Router);

  loginObj: any = {
    userName: '',
    password: ''
  };

  onLogin() {
    debugger

    const Users = Constant.userList;

    const IsUserExist = Users.find(
      m => m.userName ==this.loginObj.userName &&
        m.password == this.loginObj.password
    );

    if (IsUserExist !== undefined) {
      localStorage.setItem("doctorApp",JSON.stringify(IsUserExist))

      if(IsUserExist.role=="Patient"){
        this.route.navigateByUrl("/layout/appointmentList");
      }



     else {

       this.route.navigateByUrl("/layout/dashboard");


      }



    }
  }
}
