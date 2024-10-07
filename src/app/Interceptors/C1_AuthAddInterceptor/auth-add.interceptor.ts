import { HttpInterceptorFn } from '@angular/common/http';

/*
  Checking the Request Type
  Adding new Auth Headers to request
*/
export const authAddInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject the current `AuthService` and use it to get an authentication token:
  // const authToken = inject(AuthService).getAuthToken();
  if(req.method=='POST'){
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=')
    })
    console.log(`New updated request:`, newRequest)
    return next(newRequest);
  }
  return next(req);
};
