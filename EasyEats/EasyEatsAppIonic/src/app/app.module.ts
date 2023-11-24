import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';
import { CardapioComponent } from '../app/cardapio/cardapio.component';
import { EntradasComponent } from '../app/entradas/entradas.component';
import { PrincipaisComponent } from '../app/principais/principais.component';
import { SobremesasComponent } from '../app/sobremesas/sobremesas.component';
import { BebidasComponent } from '../app/bebidas/bebidas.component';
import { CarrinhoComponent } from '../app/carrinho/carrinho.component';
import { PratoComponent } from '../app/prato/prato.component';
import { ModalContaComponent } from '../app/modal-conta/modal-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    LoginComponent,
    CardapioComponent,
    EntradasComponent,
    PrincipaisComponent,
    SobremesasComponent,
    BebidasComponent,
    CarrinhoComponent,
    PratoComponent,
    ModalContaComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
