import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorDemoComponent } from './Interceptors/interceptor-demo/interceptor-demo.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { loggingInterceptor } from './Interceptors/C0_LoggingInterceptor/logging.interceptor';
import { authAddInterceptor } from './Interceptors/C1_AuthAddInterceptor/auth-add.interceptor';
import { retryInterceptor } from './Interceptors/C2_RetryInterceptor/retry.interceptor';
import { cacheOverrideInterceptor } from './Interceptors/C3_CacheOverride/cache-override.interceptor';
import { DiBasedInterceptor } from './Interceptors/DI_Based/di-based.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InterceptorDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //HttpClientModule is deprecated and we use provideHttpClient() as a provider to use HttpClient
    provideHttpClient(
      //interceptors executed in the order they mentioned here
      withInterceptors([
        cacheOverrideInterceptor,
        loggingInterceptor, 
        authAddInterceptor,
        retryInterceptor,
        ]),
      withInterceptorsFromDi(), // For Class based Interceptors
    ),
    {provide: HTTP_INTERCEPTORS, useClass: DiBasedInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
