import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';

const routes: Routes = [
  {path:'registrar',component:RegistrarComponent},
  {path:'home',component:HomeComponent},
  {path:'lista',component:ListaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
