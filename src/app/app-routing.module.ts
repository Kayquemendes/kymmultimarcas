import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BermudasComponent } from './categorias/bermudas/bermudas.component';
import { BonesComponent } from './categorias/bones/bones.component';
import { CalcasComponent } from './categorias/calcas/calcas.component';
import { CamisasComponent } from './categorias/camisas/camisas.component';
import { CamisetasComponent } from './categorias/camisetas/camisetas.component';
import { CarteirasComponent } from './categorias/carteiras/carteiras.component';
import { CuecasComponent } from './categorias/cuecas/cuecas.component';
import { OculosComponent } from './categorias/oculos/oculos.component';
import { ShortsComponent } from './categorias/shorts/shorts.component';
import { TenisComponent } from './categorias/tenis/tenis.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {
   path: '', redirectTo: '/home', pathMatch: 'full'
 },
 {
  path: 'home', component: HomeComponent
 },
 {
   path: 'bermudas', component: BermudasComponent 
  },
  {
   path: 'bones', component: BonesComponent 
  },
  {
   path: 'calcas', component: CalcasComponent
  },
  {
   path: 'camisas', component: CamisasComponent 
  },
  {
   path: 'camisetas', component: CamisetasComponent 
  },
  {
   path: 'carteiras', component: CarteirasComponent
  },
  {
   path: 'cuecas', component: CuecasComponent 
  },
  {
   path: 'oculos', component: OculosComponent 
  },
  {
   path: 'shorts', component: ShortsComponent
  },
  {
   path: 'tenis', component: TenisComponent 
  },
 
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
 
 