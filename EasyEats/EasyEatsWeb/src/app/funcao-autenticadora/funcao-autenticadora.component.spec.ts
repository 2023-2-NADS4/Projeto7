import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoAutenticadoraComponent } from './funcao-autenticadora.component';

describe('FuncaoAutenticadoraComponent', () => {
  let component: FuncaoAutenticadoraComponent;
  let fixture: ComponentFixture<FuncaoAutenticadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncaoAutenticadoraComponent]
    });
    fixture = TestBed.createComponent(FuncaoAutenticadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
