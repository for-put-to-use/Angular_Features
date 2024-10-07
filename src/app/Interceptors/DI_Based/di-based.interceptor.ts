import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
  For this to work
  In Module add below config

    providers: [
    //HttpClientModule is deprecated and we use provideHttpClient() as a provider to use HttpClient
    provideHttpClient(
      //interceptors executed in the order they mentioned here
      withInterceptors([
          ...
        ]),
      withInterceptorsFromDi(), // For Class based Interceptors
    ),
    {provide: HTTP_INTERCEPTORS, useClass: DiBasedInterceptor, multi: true},
  ],
*/

@Injectable()
export class DiBasedInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("DiBasedInterceptor - DI based interceptor")
    return next.handle(req);
  }
}
