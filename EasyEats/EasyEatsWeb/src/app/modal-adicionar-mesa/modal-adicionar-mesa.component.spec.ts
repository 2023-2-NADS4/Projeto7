import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarMesaComponent } from './modal-adicionar-mesa.component';

describe('ModalAdicionarMesaComponent', () => {
  let component: ModalAdicionarMesaComponent;
  let fixture: ComponentFixture<ModalAdicionarMesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAdicionarMesaComponent]
    });
    fixture = TestBed.createComponent(ModalAdicionarMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
