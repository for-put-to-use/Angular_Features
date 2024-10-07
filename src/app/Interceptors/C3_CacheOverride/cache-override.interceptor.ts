import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { CacheService } from '../../Cache/cache.service';
import { inject } from '@angular/core';
import { of, tap } from 'rxjs';

export const cacheOverrideInterceptor: HttpInterceptorFn = (req, next) => {
  
  //Inject when we are using functions instead of a class
  const cacheService = inject(CacheService);

  if(req.method != 'GET'){
    return next(req);
  }

  if(req.urlWithParams.endsWith("/users?page=2")){
    console.log("starting cacheOverrideInterceptor");
    const cacheResponse = cacheService.get(req.urlWithParams);
    console.log(cacheResponse);

    if(cacheResponse){
      return of(new HttpResponse({
        body: cacheResponse,
        status: 200,
        statusText: "OK"
      }))
    }
    else{
      next(req).pipe(
        tap(value => {
          console.log("saving in cache")
          cacheService.set(req.urlWithParams, {
            "cached": "data",
            "body": value
          })
        })
      )
    }  
  }

  return next(req);
};
