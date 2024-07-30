import { TestBed } from '@angular/core/testing';

import { OttServiceService } from './ott-service.service';

describe('OttServiceService', () => {
  let service: OttServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OttServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
