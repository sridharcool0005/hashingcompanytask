import { TestBed } from '@angular/core/testing';

import { ApicallserviceService } from './apicallservice.service';

describe('ApicallserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApicallserviceService = TestBed.get(ApicallserviceService);
    expect(service).toBeTruthy();
  });
});
