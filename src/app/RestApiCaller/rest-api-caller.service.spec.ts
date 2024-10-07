import { TestBed } from '@angular/core/testing';

import { RestApiCallerService } from './rest-api-caller.service';

describe('RestApiCallerService', () => {
  let service: RestApiCallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiCallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
