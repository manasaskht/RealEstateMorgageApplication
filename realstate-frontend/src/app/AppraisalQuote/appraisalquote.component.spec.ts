import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalQuoteComponent } from './appraisalquote.component';

describe('AppraisalQuoteComponent', () => {
  let component: AppraisalQuoteComponent;
  let fixture: ComponentFixture<AppraisalQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
