import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: "",
    component: HomePageComponent,
    //Cuando es una aplicación a gran escala no sirve poner component. porque no está respetando lo del lazy loading. Conviene trabajar con el loadChildren. Es importante en este punto que los modulos que importemos sean módulos que internamente tengan rutas
    loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule),
    canActivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
