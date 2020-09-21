import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGuarnicionesComponent } from './dialog-guarniciones.component';

describe('DialogGuarnicionesComponent', () => {
  let component: DialogGuarnicionesComponent;
  let fixture: ComponentFixture<DialogGuarnicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogGuarnicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGuarnicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
