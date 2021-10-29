import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/models/customer';
import { CustomerState } from '../store/reducer/Customer/customer.reducer';
import { selectCustomers } from '../store/selector/Customer/customer.selector';
import { loadCustomerAction } from '../store/action/Customer/customer.action';
import { deleteCustomerAction } from '../store/action/Customer/customer.action';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(
    private store: Store<CustomerState>
  ) { 
    this.customers$ = this.store.pipe(select(selectCustomers));
    // this.customers$ = this.store.select(loadCustomerAction);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCustomerAction());
  }

  onDeleteCustomer(id: string) {
    if(confirm("Are you sure you want to delete?")) {
      this.store.dispatch(deleteCustomerAction({id}));
    }
  }

}
