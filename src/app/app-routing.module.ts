import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'findroom', loadChildren: () => import('./Pages/findroom/findroom.module').then(m => m.FindroomModule) }, { path: 'waitingroom', loadChildren: () => import('./Pages/waitingroom/waitingroom.module').then(m => m.WaitingroomModule) }, { path: 'Login', loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule) }, { path: 'login', loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule) }, { path: 'menu', loadChildren: () => import('./Pages/menu/menu.module').then(m => m.MenuModule) }, { path: 'lobby', loadChildren: () => import('./Pages/lobby/lobby.module').then(m => m.LobbyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
