import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importando o Angular Forms
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

// importando o Angular HttpCLient
import {HttpClientModule} from '@angular/common/http'

// npm set strict-ssl false

//forma antiga de exportar
// import { FormComponent } from './form/form.component';

//forma nova
import { FormComponent } from './components/index';

// https://github.com/lukcampos/aula-4
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,// modulo do angular forms
    ReactiveFormsModule, // modulo do angular forms,
    HttpClientModule // modulo do angular HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
