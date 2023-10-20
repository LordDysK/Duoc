import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'alumno',
    canActivate: [AuthGuard],
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'lista',
    canActivate: [AuthGuard],
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPagePageModule)
 },
 { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
