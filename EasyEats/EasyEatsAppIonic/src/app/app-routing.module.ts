import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../app/login/login.component";
import { CardapioComponent } from "../app/cardapio/cardapio.component";
import { EntradasComponent } from "../app/entradas/entradas.component";
import { PrincipaisComponent } from "../app/principais/principais.component";
import { SobremesasComponent } from "../app/sobremesas/sobremesas.component";
import { BebidasComponent } from "../app/bebidas/bebidas.component";
import { CarrinhoComponent } from "../app/carrinho/carrinho.component";
import { PratoComponent } from "../app/prato/prato.component";
import { ModalContaComponent } from "../app/modal-conta/modal-conta.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'entradas', component: EntradasComponent },
  { path: 'principais', component: PrincipaisComponent },
  { path: 'sobremesas', component: SobremesasComponent },
  { path: 'bebidas', component: BebidasComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'prato', component: PratoComponent },
  { path: 'modal-conta', component: ModalContaComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
