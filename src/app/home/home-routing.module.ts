import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[{
      path:'usuario',
      component:UsuarioComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
