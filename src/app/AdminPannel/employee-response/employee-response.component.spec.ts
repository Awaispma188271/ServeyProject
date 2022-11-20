import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResponseComponent } from './employee-response.component';

describe('EmployeeResponseComponent', () => {
  let component: EmployeeResponseComponent;
  let fixture: ComponentFixture<EmployeeResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
