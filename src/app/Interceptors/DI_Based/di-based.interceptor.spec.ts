import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { DiBasedInterceptor } from './di-based.interceptor';

describe('DiBasedInterceptor', () => {
  let interceptor: DiBasedInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = TestBed.inject(DiBasedInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
