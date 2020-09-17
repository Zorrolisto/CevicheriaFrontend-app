import { TestBed } from '@angular/core/testing';

import { GuarnicionService } from './guarnicion.service';

describe('GuarnicionService', () => {
  let service: GuarnicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuarnicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
