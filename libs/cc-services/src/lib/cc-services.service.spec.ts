import { TestBed } from '@angular/core/testing';

import { CcServicesService } from './cc-services.service';

describe('CcServicesService', () => {
  let service: CcServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
