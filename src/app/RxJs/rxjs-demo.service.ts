import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';


/*
	RxJS
		Subjects
			Types of Subjects
			Subject from an Observable
			Observable from a Subject
		Observables
			
		Operators
*/

@Injectable({
  providedIn: 'root'
})
export class RxjsDemoService {

  //only holds 1 value at a time, ie,. current value
  behaviourSubject = new BehaviorSubject(0);

  //records multiple values and replays all to observers
  replaySubject = new ReplaySubject(); //it takes buffer size as 1st param, by default infinity size

  //only last value is sent that too after .complete() is called.
  asyncSubject = new AsyncSubject();

  //void subject, doesn't emit any value but only emits an event
  voidSubject = new Subject<void>();
//   voidSubject = new Subject(); //by default it is void in Angular 7+

  constructor() { }

  operatorsDemo(){
	/*
		Operators:
			Pipable Operators
				they create new observable from given
			High-Order Observables (flattening ops, join ops...etc.,)
				concatAll
				mergeAll
				switchAll
				exhaustAll
			Categories of Operators
				Creation
				Join Creation
				Transform
				Filtering
				Join
				Multicast
				Error Handling
				Utility
				Conditional and Boolean
				Mathematical and Aggregate
			Custom Operator
	*/
  }

  typesOfSubjectsDemo(){
	this.behaviourSubject.next(1); 
	//old value 0 is gone unless someone already subscribed to it before this line execution
	
	// all below values are emitted the moment someone subscribes.
	this.replaySubject.next(0);
	this.replaySubject.next(1);
	this.replaySubject.next(2);
	this.replaySubject.next(3);

	this.asyncSubject.next(1);
	this.asyncSubject.next(3);
	this.asyncSubject.next(5);
	this.asyncSubject.next(7);
	this.asyncSubject.complete(); // only last next() value is emitted

	setTimeout(()=>{
		this.voidSubject.next();
	}, 1000); //emit event after 1 second

  }
}
