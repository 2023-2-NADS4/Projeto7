import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-excluir-mesa',
  templateUrl: './modal-excluir-mesa.component.html',
  styleUrls: ['./modal-excluir-mesa.component.css']
})
export class ModalExcluirMesaComponent {
  constructor(private router: Router) { }

  ExcluirMesa() {
    let mesaID = localStorage.getItem('mesaID')

    console.log('Estou a caminho de excluir a mesa');
    console.log('Ovo Exclui');
    $.post(
      `https://kwr3pd-3000.csb.app/excluirMesa`,
      {
        id: mesaID
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
