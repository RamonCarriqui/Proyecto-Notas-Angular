import { TestBed } from '@angular/core/testing';

import { DatoslistaService } from './datoslista.service';

describe('DatoslistaService', () => {
  let service: DatoslistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoslistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
