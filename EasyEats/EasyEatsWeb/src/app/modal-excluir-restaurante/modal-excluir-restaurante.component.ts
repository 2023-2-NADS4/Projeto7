import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-excluir-restaurante',
  templateUrl: './modal-excluir-restaurante.component.html',
  styleUrls: ['./modal-excluir-restaurante.component.css']
})
export class ModalExcluirRestauranteComponent {

  constructor(private router: Router) {}

  ExcluirRestaurante() {
    let deletarID = localStorage.getItem('deletarID');

    console.log('Estou a caminho de Exluir o restaurante');
    console.log('Ovo Exclui');
    $.post(
      `https://kwr3pd-3000.csb.app/excluirRestaurante`,
      {
        id: deletarID
      },
      (res) => {
        console.log(res);
        alert(res);
        window.location.reload();
      }
    );
  }

  RestringirRestaurante(){
    let deletarID = localStorage.getItem('deletarID');
    console.log('Estou a caminho de Restringir o restaurante');

    $.post(
      `https://kwr3pd-3000.csb.app/restringirRestaurante`,
      {
        id: deletarID
      },
      (res) => {
        console.log(res);
        alert(res);
        window.location.reload();
      }
    );
  }

  fecharModal(){
    window.location.reload();
  }
}
