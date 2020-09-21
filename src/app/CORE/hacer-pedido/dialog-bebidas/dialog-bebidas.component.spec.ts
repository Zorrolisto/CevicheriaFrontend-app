import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBebidasComponent } from './dialog-bebidas.component';

describe('DialogBebidasComponent', () => {
  let component: DialogBebidasComponent;
  let fixture: ComponentFixture<DialogBebidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBebidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
