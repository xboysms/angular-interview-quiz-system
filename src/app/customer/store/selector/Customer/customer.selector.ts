import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCustomer from "../../reducer/Customer/customer.reducer"

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState> (
    fromCustomer.customerFeatureKey
)

export const selectCustomers = createSelector(
    selectCustomerState, 
    (state: fromCustomer.CustomerState) => state.customers
);

export const getCustomersList = createSelector(
    selectCustomerState, 
    (state: fromCustomer.CustomerState) => state.customers
);