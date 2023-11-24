import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-excluir-prato',
  templateUrl: './modal-excluir-prato.component.html',
  styleUrls: ['./modal-excluir-prato.component.css']
})
export class ModalExcluirPratoComponent {
  constructor(private router: Router) {}

  ExcluirPrato() {
    let pratoID = localStorage.getItem('pratoID')

    console.log('Estou a caminho de Exluir o Prato');
    console.log('Ovo Exclui');
    $.post(
      `https://kwr3pd-3000.csb.app/excluirPratoCardapio`,
      {
        id: pratoID
      },
      (res) => {
        console.log(res);
        alert(res);
        window.location.reload();
      }
    );
  }
  closeModal() {
    window.location.reload()
  }
}
