import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token = localStorage.getItem('token');
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add authorization header with jwt token if available
    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        //'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    });

    return next.handle(request);
  }
}
