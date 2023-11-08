import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:'admin', loadChildren:()=> import('./admin-panel/admin-panel.module').then((m)=>m.AdminPanelModule)},
  {path:'', loadChildren:()=> import('./store/store.module').then((m)=>m.StoreModules)},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
