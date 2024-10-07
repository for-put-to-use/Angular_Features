import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestApiCallerService } from '../../RestApiCaller/rest-api-caller.service';

@Component({
  selector: 'app-interceptor-demo',
  templateUrl: './interceptor-demo.component.html',
  styleUrl: './interceptor-demo.component.css'
})
export class InterceptorDemoComponent implements OnInit{

  constructor(private rest: RestApiCallerService){}

  ngOnInit(): void {
    this.demoInterceptors();
  }

  demoInterceptors(){
    console.log("calling demoInterceptors()");
    //logging interceptor
    this.rest.getEndpointCall().subscribe(
      //not doing anything with response
      value => value
    );

    this.rest.postEndpointCall().subscribe();

    //error response test for retry interceptor
    this.rest.errorEndpointCall().subscribe();

    //cached response
    this.rest.getCachedEndpointCall().subscribe(value => value);

    //
    console.log("ending demoInterceptors()");
  }

}
