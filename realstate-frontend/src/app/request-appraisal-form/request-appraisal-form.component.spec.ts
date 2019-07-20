import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAppraisalFormComponent } from './request-appraisal-form.component';

describe('RequestAppraisalFormComponent', () => {
  let component: RequestAppraisalFormComponent;
  let fixture: ComponentFixture<RequestAppraisalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAppraisalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAppraisalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
