import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { AdminRootComponent } from './admin-root/admin-root.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    OrderComponent,
    AdminRootComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
