import { TestBed } from '@angular/core/testing';

import { CommunicationCardServiceService } from './communication-card-service.service';

describe('CommunicationCardServiceService', () => {
  let service: CommunicationCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
