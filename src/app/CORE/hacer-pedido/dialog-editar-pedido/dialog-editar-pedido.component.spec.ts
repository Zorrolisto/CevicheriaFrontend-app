import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarPedidoComponent } from './dialog-editar-pedido.component';

describe('DialogEditarPedidoComponent', () => {
  let component: DialogEditarPedidoComponent;
  let fixture: ComponentFixture<DialogEditarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
