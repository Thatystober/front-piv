import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  { path: 'estante', component: LivrosComponent },
  { path: 'form', component: FormComponent },
  { path: 'edit/:id', component: FormComponent },
  { path: '', redirectTo: 'tabela', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
