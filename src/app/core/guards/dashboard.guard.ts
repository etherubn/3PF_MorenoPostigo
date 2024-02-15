import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/service/auth.service';

export const dashBoardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authUser = inject(AuthService)
  if(localStorage.getItem("token")){
    router.navigateByUrl("/dashboard")
    return false
  }
  return true
};