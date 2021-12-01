import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { BermudasComponent } from './categorias/bermudas/bermudas.component';
import { BonesComponent } from './categorias/bones/bones.component';
import { CalcasComponent } from './categorias/calcas/calcas.component';
import {CamisasComponent } from './categorias/camisas/camisas.component';
import { CamisetasComponent } from './categorias/camisetas/camisetas.component';
import { CarteirasComponent } from './categorias/carteiras/carteiras.component';
import { CuecasComponent } from './categorias/cuecas/cuecas.component';
import { OculosComponent } from './categorias/oculos/oculos.component';
import { TenisComponent } from './categorias/tenis/tenis.component';
import { ShortsComponent } from './categorias/shorts/shorts.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BermudasComponent,
    BonesComponent,
    CalcasComponent,
    CamisetasComponent,
    CarteirasComponent,
    CuecasComponent,
    OculosComponent,
    ShortsComponent,
    TenisComponent,
    CamisasComponent,
    HomeComponent,
    MenuComponent
  ],

  imports: [
   BrowserModule
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
