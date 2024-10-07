import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorDemoComponent } from './interceptor-demo.component';

describe('InterceptorDemoComponent', () => {
  let component: InterceptorDemoComponent;
  let fixture: ComponentFixture<InterceptorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterceptorDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
