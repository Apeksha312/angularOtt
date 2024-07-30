import { TestBed } from '@angular/core/testing';

import { OttService1Service } from './ott-service1.service';

describe('OttService1Service', () => {
  let service: OttService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OttService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
