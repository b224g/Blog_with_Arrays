import { TestBed } from '@angular/core/testing';

import { EnregistrementServiceService } from './enregistrement-service.service';

describe('EnregistrementServiceService', () => {
  let service: EnregistrementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnregistrementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
