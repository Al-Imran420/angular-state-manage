import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component: AdminRootComponent, 
    children:[
      {path: "dashboard", component: DashboardComponent},
      {path: "order", component: OrderComponent},
      {path: "products", component: ProductsComponent},
      {path: "", pathMatch:'full', redirectTo:'dashboard'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
