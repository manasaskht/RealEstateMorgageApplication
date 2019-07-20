import { TestBed } from '@angular/core/testing';

import { RequestAppraisalFormService } from './request-appraisal-form.service';

describe('RequestAppraisalFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestAppraisalFormService = TestBed.get(RequestAppraisalFormService);
    expect(service).toBeTruthy();
  });
});
