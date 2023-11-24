import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { MenuRestauranteComponent } from './menu-restaurante/menu-restaurante.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PratoComponent } from './prato/prato.component';
import { MesasComponent } from './mesas/mesas.component';
import { CozinhaComponent } from './cozinha/cozinha.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'menu-restaurante', component: MenuRestauranteComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'prato', component: PratoComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'cozinha', component: CozinhaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
