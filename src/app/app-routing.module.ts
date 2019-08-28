import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './components/index'

// declarar todas as rotas
const routes: Routes = [
  {
  path:'form', component:FormComponent //definir componet para a rota form
},
{
  path:'', component:FormComponent //definir como rota principal
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
