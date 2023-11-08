import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreRootComponent } from './store-root/store-root.component'
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './abouts/abouts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

import { StoreModule } from '@ngrx/store';
import * as storeReducers from './store/reducers/store.reducers';
import { metaReducers } from './store/hydration/hydration.reducer'

@NgModule({
  declarations: [
    StoreRootComponent,
    HomeComponent,
    AboutsComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    StoreModule.forFeature('storeState', storeReducers.productReducer,{metaReducers})
  ]
})
export class StoreModules { }
