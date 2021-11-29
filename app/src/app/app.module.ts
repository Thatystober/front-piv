import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from "./livros/livros.component";
import { FormComponent } from './form/form.component';
import { FiltroPipe } from './filtro.pipe';
import { FormsModule } from '@angular/forms';
import { MoedaPipe } from './moeda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    FormComponent,
    FiltroPipe,
    MoedaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
