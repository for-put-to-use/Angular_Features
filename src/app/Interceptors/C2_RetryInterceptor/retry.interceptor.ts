import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  const maxRetries = 3;

  return next(req).pipe(
    retry(maxRetries),
    catchError(error => {
      console.error(`Retried ${maxRetries} times and still request is failing !`);
      throw error;
    })
  );
};
