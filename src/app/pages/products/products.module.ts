import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    ProductListComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
