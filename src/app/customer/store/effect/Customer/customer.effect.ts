import { Component, Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as CustomerActions from '../../action/Customer/customer.action';
import { loadCustomerAction, loadCustomerActionSuccess } from '../../action/Customer/customer.action';
import { map, mergeMap } from 'rxjs/operators';
import { CustomerService } from 'src/app/customer/customer.service';

@Injectable()
export class CustomerEffect {

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) { 

  }

  loadCustomers$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadCustomerAction),
        mergeMap((action) => {
          return this.customerService.getCustomerList().pipe(
            map((customers) => {
              console.log(customers);
              return loadCustomerActionSuccess({customers});
            })
          )
        })
      )
    },  {dispatch: false}
  );  
}
