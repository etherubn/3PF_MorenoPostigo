import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/features/auth/service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)

  return authService.verificarToken().pipe(
    map((isAuthenticathed) =>
      isAuthenticathed ? true : router.createUrlTree(["auth","login"]
      )
    )
  )

};


