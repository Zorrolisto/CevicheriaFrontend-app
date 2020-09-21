import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlatosComponent } from './dialog-platos.component';

describe('DialogPlatosComponent', () => {
  let component: DialogPlatosComponent;
  let fixture: ComponentFixture<DialogPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
