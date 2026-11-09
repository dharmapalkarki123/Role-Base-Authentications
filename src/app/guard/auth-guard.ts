import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isLocal=localStorage.getItem("doctorApp");
  const router= inject(Router);

  if(isLocal==null){
    router.navigateByUrl("/login")
    return false;

  }else {
    return true;
  }


};
