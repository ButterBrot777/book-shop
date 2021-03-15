import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminRoutingModule.components,
    EditProductComponent,
  ]
})
export class AdminModule {}
