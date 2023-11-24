import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadImage } from '../upload-image.service';

@Component({
  selector: 'app-modal-adicionar-prato',
  templateUrl: './modal-adicionar-prato.component.html',
  styleUrls: ['./modal-adicionar-prato.component.css'],
})
export class ModalAdicionarPratoComponent {
  constructor(private router: Router, private uploadImage: UploadImage) {}

  public imagem: any;
  public formulario: FormGroup = new FormGroup({
    teste: new FormControl(null),
  });

  public fileupload(event: Event) {
    this.imagem = (<HTMLInputElement>event.target).files;
    console.log(this.imagem);
  }

  closeModalAdicionar() {
    window.location.reload();
  }

  cadastroImagem(
    nome: string,
    descricao: string,
    preco: string,
    categoria: string
  ) {
    let url = '';
    let key = '';

    console.log('Iniciei o cadastro da imagem!');

    this.uploadImage
      .SubirImagem({
        nomeDoPrato: this.formulario.value.teste,
        imagem: this.imagem[0],
      })
      .then((res) => {
        console.log('Imagem Salva!');
        url = res[0].url;
        key = res[0].key;
        this.cadastroPrato(nome,descricao,preco,categoria,url,key);
      });
  }

  cadastroPrato(
    nome: string,
    descricao: string,
    preco: string,
    categoria: string,
    url: string,
    key: string
  ) {
    let id_restaurante = localStorage.getItem('id');
    console.log('Iniciando cadastro do Prato');
    $.post(
      `https://kwr3pd-3000.csb.app/cadastroPratoCardapio`,
      {
        nome: nome,
        categoria: categoria,
        preco: preco,
        descricao: descricao,
        link: url,
        id_restaurante: id_restaurante,
        fire_base_key: key,
      },
      (res) => {
        console.log(res);
        console.log(`Url do componente é: ${url}`);
        console.log(`Key do componente é: ${key}`);
        window.location.reload();
      }
    );
  }
}
