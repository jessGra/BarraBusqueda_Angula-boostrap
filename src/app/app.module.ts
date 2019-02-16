import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule} from './material-config';//importacion modulos angular material

import { AppComponent } from './app.component';
import { myFormComponent } from './form/form.component';//componente formulario
import { HttpClientModule } from '@angular/common/http';//necesario para consumir servicios


import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
@NgModule({
  declarations: [
    AppComponent,
    myFormComponent,
    BarraBusquedaComponent//componente formulario
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,//modulos angular material
    HttpClientModule//consumir servicios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
