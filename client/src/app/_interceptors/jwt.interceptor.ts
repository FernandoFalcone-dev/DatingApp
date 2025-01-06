import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable, take, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { AccountService } from '../_services/account.service';

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const accountService = inject(AccountService);

  return accountService.currentUser$.pipe(
    take(1),
    switchMap(user => {
      if (user) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });
      }
      return next(req);
    })
  );
};