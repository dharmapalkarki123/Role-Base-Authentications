import { CanActivateFn, Router } from '@angular/router';
import { Constant } from '../../constant';
import { inject } from '@angular/core';

export const roleCheckGuard: CanActivateFn = (route, state) => {
debugger;
  const routerName = state.url.split("/")[1];

  const menuItem = Constant.menuList.find(m => m.route == routerName);

  const routers = inject(Router);

  const isLocal = localStorage.getItem("doctorApp");

  if (isLocal != null) {

    const user = JSON.parse(isLocal);

    const isRoleExist = menuItem?.role.includes(user.role);

    if (isRoleExist == true) {
      return true;
    } else {
      routers.navigateByUrl("/layout/no-access");
      return false;
    }

  } else {
    routers.navigateByUrl("/login");
    return false;
  }

};
