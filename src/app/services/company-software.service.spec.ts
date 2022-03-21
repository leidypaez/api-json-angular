import { TestBed } from '@angular/core/testing';

import { CompanySoftwareService } from './company-software.service';

describe('CompanySoftwareService', () => {
  let service: CompanySoftwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanySoftwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
