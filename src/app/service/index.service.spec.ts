import { TestBed, inject } from '@angular/core/testing';

import { IndexService } from './index.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

describe('IndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexService]
    });
  });

  it('should be created', inject([IndexService], (service: IndexService) => {
    expect(service).toBeTruthy();
  }));
});
