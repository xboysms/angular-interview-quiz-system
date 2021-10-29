import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { customerFeatureKey, reducer } from './store/reducer/Customer/customer.reducer';
import { Customer } from '../models/customer';
import { CustomerEffect } from './store/effect/Customer/customer.effect';



@NgModule({
  declarations: [
    CustomerViewComponent,
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
    EffectsModule.forFeature([CustomerEffect])
  ], 
  exports: [
    CustomerViewComponent, CustomerAddComponent
  ]
})
export class CustomerModule { }
