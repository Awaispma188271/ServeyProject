import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSurveyComponent } from './employee-survey.component';

describe('EmployeeSurveyComponent', () => {
  let component: EmployeeSurveyComponent;
  let fixture: ComponentFixture<EmployeeSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
