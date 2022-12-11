import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';


import { Tab3PageRoutingModule } from './tab3-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalProductModule } from '../modal-product/modal-product.module';
import { CorreiosService } from '../services/correios.service';
import { ProductService } from '../services/product.service';
import { SupplierService } from '../services/supplier.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ModalProductModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page],
  providers: [CorreiosService, ProductService, SupplierService]
})
export class Tab3PageModule {}
