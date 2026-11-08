import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Constant } from '../../../constant';

@Component({
  selector: 'app-layout',
  imports: [ RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone: true,
})
export class Layout {
   loggedUserData:any

  roleWiseMenuList:any[]=Constant.menuList;

  constructor(){
     const local=localStorage.getItem("doctorApp");
     if(local!=null){
       this.loggedUserData=JSON.parse(local);
       this.roleWiseMenuList.filter(m=>m.roles.includes(this.loggedUserData.role))
     }
  }

}
