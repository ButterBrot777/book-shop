import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent, EditProductComponent } from './components';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [EditProductComponent, AdminLayoutComponent, AddProductComponent],
})
export class AdminModule {}
