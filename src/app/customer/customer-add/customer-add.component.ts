import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../../models/customer';
import { addCustomer } from '../store/action/Customer/customer.action';
import { CustomerState } from '../store/reducer/Customer/customer.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(
    private store: Store<CustomerState>
  ) { }

  ngOnInit(): void {
  }

  addCustomer(customerName: string) {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
  }

}
