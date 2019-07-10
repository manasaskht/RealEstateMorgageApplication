import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorgageApplicationFormComponent } from './morgage-application-form.component';

describe('MorgageApplicationFormComponent', () => {
  let component: MorgageApplicationFormComponent;
  let fixture: ComponentFixture<MorgageApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorgageApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorgageApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
