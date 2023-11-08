import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './abouts/abouts.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { StoreRootComponent } from './store-root/store-root.component';

const routes: Routes = [
  {path:'', component: StoreRootComponent, 
    children:[
      {path:'home', component: HomeComponent},
      {path:'about', component: AboutsComponent},
      {path:'shop', component: ShopComponent},
      {path:'cart', component: CartComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
