import { TestBed } from '@angular/core/testing';

import { SecondService } from './second.service';

describe('ServiceTwoService', () => {
  let service: SecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
