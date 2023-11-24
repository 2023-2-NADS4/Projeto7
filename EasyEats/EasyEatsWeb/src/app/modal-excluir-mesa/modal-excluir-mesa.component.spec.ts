import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirMesaComponent } from './modal-excluir-mesa.component';

describe('ModalExcluirMesaComponent', () => {
  let component: ModalExcluirMesaComponent;
  let fixture: ComponentFixture<ModalExcluirMesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirMesaComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
