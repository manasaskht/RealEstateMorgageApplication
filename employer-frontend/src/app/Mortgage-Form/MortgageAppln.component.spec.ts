import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageFormComponent } from './MortgageAppln.component';

describe('MortgageFormComponent', () => {
  let component: MortgageFormComponent;
  let fixture: ComponentFixture<MortgageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
