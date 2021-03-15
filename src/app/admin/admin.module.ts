import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent, EditProductComponent } from './components';

@NgModule({
  imports: [SharedModule, AdminRoutingModule],
  declarations: [EditProductComponent, AdminLayoutComponent],
})
export class AdminModule {}
