import { TestBed } from '@angular/core/testing';

import { ServiceAdminService } from './service-admin.service';

describe('ServiceAdminService', () => {
  let service: ServiceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
