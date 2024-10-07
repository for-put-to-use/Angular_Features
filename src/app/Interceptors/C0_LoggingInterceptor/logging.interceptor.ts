import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

/*
  Logging and Calculates the response time
*/
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Logging Interceptor - Request:", req, " Calling :",req.url);

  const startTime = Date.now(); 
  //Date.now() is more leight weight and efficient than new Date(); here

  return next(req).pipe(
    tap({
      complete: () => {
        const elapsed = Date.now() - startTime;
        console.log(`It took ${elapsed}ms time to get success res for ${req.urlWithParams}`)
      },
      error: () => {
        const elapsed = Date.now() - startTime;
        console.log(`It took ${elapsed}ms time to get error res for ${req.urlWithParams}`)
      }
    })
  );
};
