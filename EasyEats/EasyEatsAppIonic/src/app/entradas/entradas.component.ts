import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.scss'],
})
export class EntradasComponent  implements OnInit {
  constructor(private router: Router, private toastController: ToastController) {this.pratos = [];}
  pratos: any[];

  ngOnInit() {
    this.Pratos();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: `Pedido enviado para o carrinho com sucesso! Lembre-se de mandar para cozinha!`,
      duration: 3000,
      position: position,
    });

    await toast.present();
  }

  Pratos() {
    let id_restaurante = localStorage.getItem("id_restaurante")
    let categoria = 'Entrada'
    $.post(`https://kwr3pd-3000.csb.app/cardapio-filtrado`, {id_restaurante: id_restaurante, categoria: categoria}, (res) => {
      console.log("Recebi alguma coisa");
      console.log(res);
      this.pratos = res;
    });
  }

  Carrinho(nome:string, preco: string, categoria: string, id_restaurante:string, link:string){

    let observacao = 'Ainda não implementado';
    let id_mesa = localStorage.getItem('id');

    console.log('Salvando no carrinho acionado!');
    console.log(nome);
    console.log(preco);
    console.log(categoria);
    console.log(id_restaurante);
    console.log(id_mesa);
    console.log(link);

    $.post(`https://kwr3pd-3000.csb.app/cadastroPratoCarrinho`,
    {
      nome: nome,
      link: link,
      observacao: observacao,
      preco: preco,
      categoria: categoria,
      id_restaurante: id_restaurante,
      id_mesa: id_mesa
    }, (res) => {
      console.log("Recebi alguma coisa");
      console.log(res);
      this.pratos = res;
    });
  }

  NavegarParaCarrinho(){
    this.router.navigate(['/carrinho']);
  }

  NavegarVoltar(){
    this.router.navigate(['/cardapio']);
  }
}
