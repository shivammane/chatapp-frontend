import { TestBed } from '@angular/core/testing';

import { SenderInfoService } from './sender-info.service';

describe('SenderInfoService', () => {
  let service: SenderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
