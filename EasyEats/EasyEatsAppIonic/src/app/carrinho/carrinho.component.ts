import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  pratosCarrinho: any[];
  pratosCozinha: any[];
  pratosEntregue: any[];

  constructor(private router: Router, private toastController: ToastController) {
    this.pratosCarrinho = [];
    this.pratosCozinha = [];
    this.pratosEntregue = [];
  }

  ngOnInit() {
    this.Carrinho();
    this.Cozinha();
    this.Entregue();

    setTimeout(() => {
      this.AtualizandoDados();
    }, 5000);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: `Pedidos enviados para cozinha! Agora é só curtir o rolê!`,
      duration: 3000,
      position: position,
    });

    await toast.present();
  }

  AtualizandoDados(){
    console.log('Atualizando dados');

    let id_restaurante = localStorage.getItem('id_restaurante');
    let id_mesa = localStorage.getItem('id');
    $.post(
      `https://kwr3pd-3000.csb.app/cozinhaMobile`,
      {
        id_restaurante: id_restaurante,
        id_mesa: id_mesa,
      },
      (res) => {
        if (res === 'Nenhum pedido encontrado')
        {
          console.log('Nenhum pedido enviado para cozinha por essa mesa');
          if(this.pratosCozinha.length === 0){
            console.log('Tudo atualizado por aqui!');
            setTimeout(() => {
              this.AtualizandoDados();
            }, 5000);
          }
          else{
            this.pratosCozinha = res;
            window.location.reload();
          }
        }
        else if(this.pratosCozinha.length === res.length){
          console.log('Tudo atualizado por aqui!');
          setTimeout(() => {
            this.AtualizandoDados();
          }, 5000);
        }
        else{
          this.pratosCozinha = res;
          window.location.reload();
        }
      }
    );
    $.post(
      `https://kwr3pd-3000.csb.app/carrinho`,
      {
        id_restaurante: id_restaurante,
        id_mesa: id_mesa,
      },
      (res) => {
        if (res === 'Nenhum pedido encontrado')
        {
          console.log('Nenhum pedido salvo no carrinho');
          if(this.pratosCarrinho.length === 0){
            console.log('Tudo atualizado por aqui!');
            setTimeout(() => {
              this.AtualizandoDados();
            }, 5000);
          }
          else{
            this.pratosCarrinho = res;
            window.location.reload();
          }
        }
        else if(this.pratosCarrinho.length === res.length){
          console.log('Tudo atualizado por aqui!');
          setTimeout(() => {
            this.AtualizandoDados();
          }, 5000);
        }
        else{
          this.pratosCarrinho = res;
          window.location.reload();
        }
      });
  }

  Carrinho() {
    console.log('Checando os pedidos do Carrinho');

    let id_restaurante = localStorage.getItem('id_restaurante');
    let id_mesa = localStorage.getItem('id');

    $.post(
      `https://kwr3pd-3000.csb.app/carrinho`,
      {
        id_restaurante: id_restaurante,
        id_mesa: id_mesa,
      },
      (res) => {
        if (res === 'Nenhum pedido encontrado')
        {
          console.log('Nenhum pedido cadastrado no carrinho por essa mesa');
        }
        else{
          this.pratosCarrinho = res;
        }
      }
    );
  }

  Cozinha() {
    console.log('Checando os pedidos enviados para Cozinha');

    let id_restaurante = localStorage.getItem('id_restaurante');
    let id_mesa = localStorage.getItem('id');
    $.post(
      `https://kwr3pd-3000.csb.app/cozinhaMobile`,
      {
        id_restaurante: id_restaurante,
        id_mesa: id_mesa,
      },
      (res) => {
        if (res === 'Nenhum pedido encontrado')
        {
          console.log('Nenhum pedido enviado para cozinha por essa mesa');
        }
        else{
          this.pratosCozinha = res;
        }
      }
    );
  }

  Entregue() {
    console.log('Checando os pedidos Entregues');

    let id_restaurante = localStorage.getItem('id_restaurante');
    let id_mesa = localStorage.getItem('id');
    $.post(
      `https://kwr3pd-3000.csb.app/cozinhaMobileEntregue`,
      {
        id_restaurante: id_restaurante,
        id_mesa: id_mesa,
      },
      (res) => {
        if (res === 'Nenhum pedido encontrado')
        {
          console.log('Nenhum pedido entregue para essa essa mesa');
        }
        else{
          this.pratosEntregue = res;
        }
      }
    );
  }

  EnviarCozinha() {
    console.log('Acionei o envio para cozinha!');
    console.log(this.pratosCarrinho);

    for (let index = 0; index < this.pratosCarrinho.length; index++) {
      $.post(
        `https://kwr3pd-3000.csb.app/cadastroPratoCozinha`,
        {
          id: this.pratosCarrinho[index].id,
          nome: this.pratosCarrinho[index].nome,
          link: this.pratosCarrinho[index].link,
          observacao: this.pratosCarrinho[index].observacao,
          preco: this.pratosCarrinho[index].preco,
          categoria: this.pratosCarrinho[index].categoria,
          id_restaurante: this.pratosCarrinho[index].id_restaurante,
          id_mesa: this.pratosCarrinho[index].id_mesa,
        },
        (res) => {
          console.log('Recebi alguma coisa!');
          console.log(res);
          window.location.reload();
        }
      );
    }
  }

  DeletarCarrinho(id: string) {
    console.log('Removendo prato do carrinho com id: ' + id);

    $.post(
      `https://kwr3pd-3000.csb.app/deletarCarrinho`,
      {
        id: id,
      },
      (res) => {
        console.log(res);
        window.location.reload();
      }
    );
  }

  NavegarVoltar(){
    this.router.navigate(['/cardapio']);
  }
}
