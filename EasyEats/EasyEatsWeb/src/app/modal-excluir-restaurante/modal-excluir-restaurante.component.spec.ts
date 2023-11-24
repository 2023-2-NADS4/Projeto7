import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirRestauranteComponent } from './modal-excluir-restaurante.component';

describe('ModalExcluirRestauranteComponent', () => {
  let component: ModalExcluirRestauranteComponent;
  let fixture: ComponentFixture<ModalExcluirRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirRestauranteComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
